import { ChallengeRepository } from '../../../../Repository/Implementations/ChallengeRepository';
import { FindAllChallengesUseCase } from './FindAllChallengesUseCase';
import { FindAllChallengesController } from './FindAllChallengesController';

import { Request, Response } from 'express';

const FindAllChallengesInstanceIndex = async (request: Request, response: Response) => {

  const challengeRepository = ChallengeRepository.getInstance();

  const findAllChallengesUseCase = new FindAllChallengesUseCase(challengeRepository);

  const findAllChallengesController = new FindAllChallengesController(findAllChallengesUseCase);

  await findAllChallengesController
    .handle(request, response);

  return findAllChallengesController;
}



export { FindAllChallengesInstanceIndex }