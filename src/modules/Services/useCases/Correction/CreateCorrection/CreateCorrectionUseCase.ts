import { ICorrectionRepository } from "../../../../Repository/ICorrectionRepository";

export class CreateCorrectionUseCase {

  constructor(private correctionRepository: ICorrectionRepository) { }

  async execute(submission_id: string, grade: number) {

    await this
      .correctionRepository
      .create(submission_id, grade);

  }
}