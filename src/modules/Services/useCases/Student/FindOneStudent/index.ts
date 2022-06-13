import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { FindOneStudentUseCase } from "./FindOneStudentUseCase";
import { FindOneStudentController } from "./FindOneStudentController";

import { Request, Response } from 'express';

const FindOneStudentInstanceIndex = async (request: Request, response: Response) => {

  const studentRepository = StudentRepository.getInstance();

  const findOneStudentUseCase = new FindOneStudentUseCase(studentRepository);

  const findOneStudentController = new FindOneStudentController(findOneStudentUseCase);

  await findOneStudentController
    .handle(request, response);

  return findOneStudentController;
}

export { FindOneStudentInstanceIndex }