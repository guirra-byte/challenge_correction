import { Request, Response } from 'express';
import { FindAllChallengesUseCase } from './FindAllChallengesUseCase';

export class FindAllChallengesController {

  constructor(private findAllChallengesUseCase: FindAllChallengesUseCase) { }

  async handle(request: Request, response: Response) {

    try {

      const findAllChallenges = await this
        .findAllChallengesUseCase
        .execute();

      return response
        .status(200)
        .json({ findAllChallenges });
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: { exception } });
    }
  }
}