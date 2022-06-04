import { AppError } from "../../../../Errors/AppError";
import { IChallengeRepository } from "../../../../Repository/IChallengeRepository";


export class CreateChallengeUseCase {

  constructor(private challengeRepository: IChallengeRepository) { }

  async execute(title: string, instructionsUrl: string): Promise<void> {

    const findChallenge = await this
      .challengeRepository
      .findOne(title);

    if (findChallenge) {

      throw new AppError("This Challenge already exists!");
    }

    const createChallenge = await this
      .challengeRepository
      .create(title, instructionsUrl);

    return createChallenge;

  }
}