import { IFindSubmissionRequestProps, ISubmissionRepository } from "../../../../Repository/ISubmissionRepository";

export class FindAllSubmissionsUseCase {

  constructor(private submissionRepository: ISubmissionRepository) { }

  async execute(): Promise<IFindSubmissionRequestProps[]> {

    const findAll = await this
      .submissionRepository
      .findAll();

    return findAll;

  }
}
