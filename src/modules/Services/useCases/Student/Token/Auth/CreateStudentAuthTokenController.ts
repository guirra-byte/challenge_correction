import { CreateStudentAuthTokenUseCase } from "./CreateStudentAuthTokenUseCase";
import { Request, Response } from 'express';

export class CreateStudentAuthTokenController {

  constructor(private createStudentAuthTokenUseCase: CreateStudentAuthTokenUseCase) { }
  async handle(request: Request, response: Response) {

    const { email, password } = request.body;

    try {

      const createStudentAuthToken = await this
        .createStudentAuthTokenUseCase
        .execute(email, password);

      return response
        .status(201)
        .send(createStudentAuthToken);
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: exception });
    }
  }
}