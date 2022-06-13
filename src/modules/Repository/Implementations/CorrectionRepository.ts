import { ICorrectionRepository, ICorrectionRequestProps } from "../ICorrectionRepository";
import { prisma } from "../../Prisma/Client/Client";
import { Correction } from "@prisma/client";

export class CorrectionRepository implements ICorrectionRepository {

  constructor(private repository: typeof prisma) { }

  private static INSTANCE: CorrectionRepository;
  static getInstance(): CorrectionRepository {

    if (!CorrectionRepository.INSTANCE) {

      CorrectionRepository.INSTANCE = new CorrectionRepository(prisma);

    }

    return CorrectionRepository.INSTANCE;
  }

  async create(submission_id: string, grade: number): Promise<any> {

    const correction = await this
      .repository
      .correction
      .create({ data: { submission_id, grade } });
  }

  async findOneCorrection(correction_id: string): Promise<ICorrectionRequestProps | undefined> {

    const findUniqueCorrection = await this
      .repository.
      correction
      .findUnique({ where: { id: correction_id } });

    const correctionRequestProps: ICorrectionRequestProps = {

      props: {

        submission_id: findUniqueCorrection.submission_id,
        grade: findUniqueCorrection.grade,
        created_at: findUniqueCorrection.created_at
      }
    }

    return correctionRequestProps;
  }

  async findAllCorrections(): Promise<Correction[]> {

    const findAllCorrections = await this
      .repository
      .correction
      .findMany();

    return findAllCorrections;
  }
}