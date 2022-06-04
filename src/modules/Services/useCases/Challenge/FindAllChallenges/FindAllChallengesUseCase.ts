import { IChallengeRepository, IFindChallengeRequestProps } from "../../../../Repository/IChallengeRepository";

export class FindAllChallengesUseCase {

  constructor(private challengeRepository: IChallengeRepository) { }

  async execute(): Promise<IFindChallengeRequestProps[]> {

    const findAllChallenges = await this
      .challengeRepository
      .findAll();

    return findAllChallenges;
  }
}