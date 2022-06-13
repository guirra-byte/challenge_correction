import { StudentRepository } from '../../../../Repository/Implementations/StudentRepository';
import { CreateStudentUseCase } from "./CreateStudentUseCase";
import { CreateStudentController } from "./CreateStudentController";

import { Request, Response } from 'express';

const CreateStudentInstanceIndex = async (request: Request, response: Response) => {

  const studentRepository = StudentRepository.getInstance();

  const createStudentUseCase = new CreateStudentUseCase(studentRepository);

  const createStudentController = new CreateStudentController(createStudentUseCase);

  await createStudentController
    .handle(request, response);

  return createStudentController;
}

export { CreateStudentInstanceIndex }