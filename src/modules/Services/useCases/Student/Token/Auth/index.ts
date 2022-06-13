import { StudentRepository } from "../../../../../Repository/Implementations/StudentRepository";
import { CreateStudentAuthTokenUseCase } from "./CreateStudentAuthTokenUseCase";
import { CreateStudentAuthTokenController } from "./CreateStudentAuthTokenController";

import { Request, Response } from 'express';

const CreateStudentAuthTokenInstanceIndex = async (request: Request, response: Response) => {

  const studentRepository = StudentRepository.getInstance();

  const createStudentAuthTokenUseCase = new CreateStudentAuthTokenUseCase(studentRepository);

  const createStudentAuthTokenController = new CreateStudentAuthTokenController(createStudentAuthTokenUseCase);

  await createStudentAuthTokenController
    .handle(request, response);

  return createStudentAuthTokenController;
}

export { CreateStudentAuthTokenInstanceIndex }