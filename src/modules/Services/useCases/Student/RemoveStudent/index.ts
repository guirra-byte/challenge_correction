import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { RemoveStudentUseCase } from "./RemoveStudentUseCase";
import { RemoveStudentController } from "./RemoveStudentController";

import { Request, Response } from 'express';

const RemoveStudentInstanceIndex = async (request: Request, response: Response) => {

  const studentRepository = StudentRepository.getInstance();

  const removeStudentUseCase = new RemoveStudentUseCase(studentRepository);

  const removeStudentController = new RemoveStudentController(removeStudentUseCase);

  await removeStudentController
    .handle(request, response);

  return removeStudentController;

}

export { RemoveStudentInstanceIndex } 