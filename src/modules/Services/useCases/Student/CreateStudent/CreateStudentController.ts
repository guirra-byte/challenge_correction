import { CreateStudentUseCase } from "./CreateStudentUseCase";
import { Request, Response } from 'express';

export class CreateStudentController {

  constructor(private createStudentUseCase: CreateStudentUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { name, email, password, challenges } = request.body;

    try {

      const createStudent = await this
        .createStudentUseCase
        .execute(name, email, password, challenges);

      return response
        .status(201)
        .send(createStudent);
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: `Your application have a error: ${exception}` });
    }
  }
}