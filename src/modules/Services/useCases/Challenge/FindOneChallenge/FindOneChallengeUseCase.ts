import { IChallengeRepository } from '../../../../Repository/IChallengeRepository';
import { AppError } from '../../../../shared/infra/http/Errors/AppError';

export class FindOneChallengeUseCase {

  constructor(private challengeRepository: IChallengeRepository) { }

  async execute(title: string) {

    const findOneChallenge = await this
      .challengeRepository
      .findOne(title);

    if (!findOneChallenge) {

      throw new AppError("Cannot find this Challenge!");
    }

    return findOneChallenge;

  }
}