import { ChallengeRepository } from "../../../../Repository/Implementations/ChallengeRepository";
import { CreateChallengeUseCase } from "./CreateChallengeUseCase";
import { CreateChallengeController } from "./CreateChallengeController";

import { Request, Response } from 'express';

const CreateChallengeInstanceIndex = async (request: Request, response: Response) => {

  const challengeRepository = ChallengeRepository.getInstance();

  const createChallengeUseCase = new CreateChallengeUseCase(challengeRepository);

  const createChallengeController = new CreateChallengeController(createChallengeUseCase);

  await createChallengeController
    .handle(request, response);

  return createChallengeController;
};

export { CreateChallengeInstanceIndex };