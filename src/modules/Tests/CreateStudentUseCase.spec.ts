import { AppError } from "../Errors/AppError";

import { StudentRepositoryInMemory } from "../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory";
import { CreateStudentUseCase } from "../Services/useCases/Student/CreateStudent/CreateStudentUseCase";

let studentRepository: StudentRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;

describe("Create Student", () => {

  beforeEach(() => {

    studentRepository = new StudentRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(studentRepository);
  });

  it("Should be able create a new Student", async () => {

    const student = {

      name: "Student Name Test",
      email: "Student Email @ Test",
      password: "Student Password Test",
      challenges: [{ title: "Query Database", instructionsUrl: "www.DeusProvera.com.br", id: "V84816756", studentId: "MabelIsReal" },]
    }

    const { name, email, password, challenges } = student;

    await createStudentUseCase
      .execute(name, email, password, challenges);

    const findStudent = await studentRepository
      .findOne(email);

    expect(findStudent)
      .toHaveProperty("id");
  });
})