import { IStudentRepository } from "../../../../Repository/IStudentRepository";

export class RemoveStudentUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  async execute(email: string): Promise<void> {

    const removeStudent = await this
      .studentRepository
      .removeStudent(email);

    return removeStudent;
  }
}