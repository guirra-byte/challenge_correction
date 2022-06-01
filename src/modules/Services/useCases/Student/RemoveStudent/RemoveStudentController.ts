import { Request, Response } from 'express';
import { RemoveStudentUseCase } from './RemoveStudentUseCase';

export class RemoveStudentController {

  constructor(private removeStudentUseCase: RemoveStudentUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { email } = request.body;

    try {

      const removeStudent = await this
        .removeStudentUseCase
        .execute(email);

      return response
        .status(204)
        .send();
    }
    catch (exception) {

      return response
        .status(400)
        .send();
    }
  }
}