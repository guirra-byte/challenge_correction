import { IFindSubmissionRequestProps, ISubmissionRepository } from "../../ISubmissionRepository";
import { Submission } from "../../../model/class/submission";

export class SubmissionRepositoryInMemory implements ISubmissionRepository {

  private repository: Submission[]

  constructor() {

    this.repository = []
  }

  async create(student_id: string, challenge_id: string): Promise<void> {

    const submission = {

      student_id: student_id,
      challenge_id: challenge_id
    }

    const createSubmission = Submission
      .create(submission);

    await this
      .repository
      .push(createSubmission);

  }

  async findById(sub: string): Promise<IFindSubmissionRequestProps> {

    const findUniqueSubmission = await this
      .repository
      .find((submission) => sub === submission.id);

    if (findUniqueSubmission === undefined) {

      const findUniqueSubmissionUndefinedRequest = undefined;
      return findUniqueSubmissionUndefinedRequest;
    }

    const findUniqueSubmissionRequest: IFindSubmissionRequestProps = {

      props: {

        student_id: findUniqueSubmission.props.student_id,
        challenge_id: findUniqueSubmission.props.challenge_id
      },
      id: findUniqueSubmission.id
    }

    return findUniqueSubmissionRequest;
  }

  async findAll(): Promise<IFindSubmissionRequestProps[]> {

    const findAllSubmissions = await this
      .repository;

    const submissions: IFindSubmissionRequestProps[] = [];

    findAllSubmissions
      .forEach(async (submission) => {

        const findAllSubmissionsRequest: IFindSubmissionRequestProps = {

          props: {

            student_id: submission.props.student_id,
            challenge_id: submission.props.challenge_id
          },
          id: submission.id
        }

        await submissions
          .push(findAllSubmissionsRequest);
      });

    return submissions;

  }

}