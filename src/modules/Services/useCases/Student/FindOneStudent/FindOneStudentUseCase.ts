import { IFindStudentRequestProps, IStudentRepository } from "../../../../Repository/IStudentRepository";

export class FindOneStudentUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  async execute(email: string): Promise<IFindStudentRequestProps> {

    const findStudent = await this
      .studentRepository
      .findOne(email);

    return findStudent;
  }
}