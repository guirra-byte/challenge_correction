import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { FindAllStudentUseCase } from "./FindAllStudentUseCase";
import { FindAllStudentController } from "./FindAllStudentsController";

import { Request, Response } from 'express';

const FindAllStudentsInstanceIndex = async (request: Request, response: Response) => {

  const studentRepository = StudentRepository.getInstance();

  const findAllStudentsUseCase = new FindAllStudentUseCase(studentRepository);

  const findAllStudentsController = new FindAllStudentController(findAllStudentsUseCase);

  await findAllStudentsController
    .handle(request, response);

  return findAllStudentsController
}

export { FindAllStudentsInstanceIndex }