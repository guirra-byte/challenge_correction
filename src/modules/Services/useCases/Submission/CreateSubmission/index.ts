import { SubmissionRepository } from "../../../../Repository/Implementations/SubmissionRepository";
import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { ChallengeRepository } from "../../../../Repository/Implementations/ChallengeRepository";

import { CreateSubmissionUseCase } from "./CreateSubmissionUseCase";
import { CreateSubmissionController } from "./CreateSubmissionController";

import { Request, Response } from 'express';

const CreateSubmissionInstanceIndex = async (request: Request, response: Response) => {

  // ---- Instanciação dos Repositories ----

  const submissionRepository = SubmissionRepository.getInstance();
  const studentRepository = StudentRepository.getInstance();
  const challengeRepository = ChallengeRepository.getInstance();

  // ---- ** ----

  const createSubmissionUseCase = new CreateSubmissionUseCase(submissionRepository, studentRepository, challengeRepository);

  const createSubmissionController = new CreateSubmissionController(createSubmissionUseCase);

  await createSubmissionController
    .handle(request, response);

  return createSubmissionController;
}

export { CreateSubmissionInstanceIndex }