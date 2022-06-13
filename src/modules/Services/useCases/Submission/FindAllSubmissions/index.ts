import { SubmissionRepository } from "../../../../Repository/Implementations/SubmissionRepository";
import { FindAllSubmissionsUseCase } from "./FindAllSubmissionsUseCase";
import { FindAllSubmissionsController } from "./FindAllSubmissionsController";

import { Request, Response } from 'express';

const FindALlSubmissionsInstanceIndex = async (request: Request, response: Response) => {

  const submissionRepository = SubmissionRepository.getInstance();

  const findAllSubmissionsUseCase = new FindAllSubmissionsUseCase(submissionRepository);

  const findAllSubmissionsController = new FindAllSubmissionsController(findAllSubmissionsUseCase);

  findAllSubmissionsController
    .handle(request, response);

  return findAllSubmissionsController;
}

export { FindALlSubmissionsInstanceIndex }