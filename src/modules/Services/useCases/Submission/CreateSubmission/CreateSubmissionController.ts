import { Request, Response } from 'express';
import { CreateSubmissionUseCase } from './CreateSubmissionUseCase';


export class CreateSubmissionController {

  constructor(private createSubmissionUseCase: CreateSubmissionUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { student_id, challenge_id } = request.body;

    try {

      const createSubmission = await this
        .createSubmissionUseCase
        .execute(challenge_id, student_id);

      return response
        .status(201)
        .send();
    }

    catch (exception) {

      return response
        .status(0)
        .json({ message: { exception } });
    }
  }
}