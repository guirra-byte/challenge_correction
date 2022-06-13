import { ICorrectionRepository, ICorrectionRequestProps } from "../../ICorrectionRepository";
import { Correction } from "../../../model/class/correction";
import { Correction } from "@prisma/client";

export class CorrectionRepositoryInMemory implements ICorrectionRepository {

  private repository: Correction[]

  constructor() {

    this.repository = [];
  }

  async create(submission_id: string, grade: number): Promise<any> {

    const correctionProps = {

      submission_id: submission_id,
      grade: grade,

    }

    const createCorrection = Correction
      .create(correctionProps);

    await this
      .repository
      .push(createCorrection);
  }

  async findOneCorrection(correction_id: string): Promise<ICorrectionRequestProps> {

    const findOneCorrection = await this
      .repository
      .find((correction) => correction_id === correction.id);

    const replaceProps: ICorrectionRequestProps = {

      props: {

        created_at: findOneCorrection.props.created_at,
        grade: findOneCorrection.props.grade,
        submission_id: findOneCorrection.props.submission_id
      }
    }

    return replaceProps;
  }

  async findAllCorrections(): Promise<Correction[]> {

    const findAllCorrections = await this
      .repository;

    return findAllCorrections;
  }
}