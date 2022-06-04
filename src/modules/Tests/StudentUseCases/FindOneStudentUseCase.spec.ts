import { StudentRepositoryInMemory } from '../../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory';

import { IFindStudentRequestProps } from '../../Repository/IStudentRepository';

import { CreateStudentUseCase } from '../../Services/useCases/Student/CreateStudent/CreateStudentUseCase';
import { FindOneStudentUseCase } from '../../Services/useCases/Student/FindOneStudent/FindOneStudentUseCase';

let studentRepository: StudentRepositoryInMemory;
let findOneStudentUseCase: FindOneStudentUseCase;

describe("Find One Student", () => {

  beforeEach(async () => {

    studentRepository = new StudentRepositoryInMemory();
    findOneStudentUseCase = new FindOneStudentUseCase(studentRepository);
  });

  it("Should be able Find one Student by student email", async () => {

    const student = {

      name: "Student Name Test",
      email: "Student Email @ Test",
      password: "Student Password Test",
      challenges: [{ title: "Query Database", instructionsUrl: "www.DeusProvera.com.br", id: "V84816756", studentId: "MabelIsReal" },]
    }

    const { name, email, password, challenges } = student;

    await studentRepository
      .create(name, email, password, challenges);

    const findStudent = await findOneStudentUseCase
      .execute(email);

    const studentRequestProps: IFindStudentRequestProps = {

      name: findStudent.name,
      email: findStudent.email,
      id: findStudent.id

    }

    expect(findStudent)
      .toMatchObject(studentRequestProps);

  });
});

