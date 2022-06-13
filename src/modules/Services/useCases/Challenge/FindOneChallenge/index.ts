import { ChallengeRepository } from "../../../../Repository/Implementations/ChallengeRepository";
import { FindOneChallengeUseCase } from "./FindOneChallengeUseCase";
import { FindOneChallengeController } from "./FindOneChallengeController";

import { Request, Response } from 'express';

const FindOneChallengeInstanceIndex = async (request: Request, response: Response) => {

  const challengeRepository = ChallengeRepository.getInstance();

  const findOneChallengeUseCase = new FindOneChallengeUseCase(challengeRepository);

  const findOneChallengeController = new FindOneChallengeController(findOneChallengeUseCase);

  await findOneChallengeController
    .handle(request, response);

  return findOneChallengeController;
}

export { FindOneChallengeInstanceIndex }