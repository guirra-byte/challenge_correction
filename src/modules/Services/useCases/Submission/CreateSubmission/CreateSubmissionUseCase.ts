import { ISubmissionRepository } from "../../../../Repository/ISubmissionRepository";
import { IStudentRepository } from "../../../../Repository/IStudentRepository";
import { IChallengeRepository } from "../../../../Repository/IChallengeRepository";

import { AppError } from "../../../../shared/infra/http/Errors/AppError";

export class CreateSubmissionUseCase {

  constructor(
    private submissionRepository: ISubmissionRepository,
    private studentRepository: IStudentRepository,
    private challengeRepository: IChallengeRepository) { }

  async execute(student_id: string, challenge_id: string) {

    const findChallenge = await this
      .challengeRepository
      .findById(challenge_id);

    if (findChallenge === undefined) {

      throw new AppError("This challenge does exists");
    }

    const findStudent = await this
      .studentRepository
      .findById(student_id);

    if (findStudent === undefined) {

      throw new AppError("This student does exists");
    }

    await this
      .submissionRepository
      .create(findStudent.id, findChallenge.id);
  }
}