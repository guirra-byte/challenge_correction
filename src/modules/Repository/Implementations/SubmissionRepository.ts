import { IFindSubmissionRequestProps, ISubmissionRepository } from "../ISubmissionRepository";
import { prisma } from "../../Prisma/Client/Client";

export class SubmissionRepository implements ISubmissionRepository {

  private repository: typeof prisma;

  constructor() {

    this.repository = prisma;
  }

  private static INSTANCE: SubmissionRepository;
  static getInstance(): SubmissionRepository {

    if (!SubmissionRepository.INSTANCE) {

      SubmissionRepository
        .INSTANCE = new SubmissionRepository();
    }

    return SubmissionRepository
      .INSTANCE;
  }

  async create(student_id: string, challenge_id: string): Promise<void> {

    await this
      .repository
      .submission
      .create(
        { data: { student_id, challenge_id } })
  }

  async findAll(): Promise<IFindSubmissionRequestProps[]> {

    const findAllSubmissions = await this
      .repository
      .submission
      .findMany();

    const allSubmissions: IFindSubmissionRequestProps[] = [];

    findAllSubmissions.forEach(async (submission) => {

      const submissionRequest: IFindSubmissionRequestProps = {

        props: {

          challenge_id: submission.challenge_id,
          student_id: submission.student_id
        },
        id: submission.id
      }

      await allSubmissions
        .push(submissionRequest);

    });

    return allSubmissions;
  }
}