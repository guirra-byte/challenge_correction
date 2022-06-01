import { IFindStudentRequestProps, IStudentRepository } from "../../../../Repository/IStudentRepository";

export class FindAllStudentUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  async execute(): Promise<IFindStudentRequestProps[]> {

    const findAllStudents = await this
      .studentRepository
      .findAll();

    return findAllStudents;
  }
}