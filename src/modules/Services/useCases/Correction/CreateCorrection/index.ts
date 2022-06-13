import { CorrectionRepository } from "../../../../Repository/Implementations/CorrectionRepository";
import { CreateCorrectionUseCase } from "./CreateCorrectionUseCase";
import { CreateCorrectionController } from "./CreateCorrectionController";

import { Request, Response } from 'express';

const CreateCorrectionInstanceIndex = async (request: Request, response: Response) => {

  const correctionRepository = CorrectionRepository.getInstance();

  const createCorrectionUseCase = new CreateCorrectionUseCase(correctionRepository);

  const createCorrectionController = new CreateCorrectionController(createCorrectionUseCase);

  await createCorrectionController
    .handle(request, response);

  return createCorrectionController;
}

export { CreateCorrectionInstanceIndex }