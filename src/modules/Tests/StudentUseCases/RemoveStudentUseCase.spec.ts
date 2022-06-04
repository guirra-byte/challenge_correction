import { RemoveStudentUseCase } from "../../Services/useCases/Student/RemoveStudent/RemoveStudentUseCase";
import { CreateStudentUseCase } from "../../Services/useCases/Student/CreateStudent/CreateStudentUseCase";

import { StudentRepositoryInMemory } from "../../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory";

let removeStudentUseCase: RemoveStudentUseCase;
let studentRepository: StudentRepositoryInMemory;

describe("Delete Student", () => {

  beforeEach(async () => {

    studentRepository = new StudentRepositoryInMemory();
    removeStudentUseCase = new RemoveStudentUseCase(studentRepository);

  });

  it("Should be able delete student", async () => {

    const student = {

      name: "Student Name Test",
      email: "Student Email @ Test",
      password: "Student Password Test",
      challenges: [{ title: "Query Database", instructionsUrl: "www.DeusProvera.com.br", id: "V84816756", studentId: "MabelIsReal" },]
    }

    const { name, email, password, challenges } = student;

    await studentRepository
      .create(name, email, password, challenges);

    const deleteStudent = await removeStudentUseCase
      .execute(email);

    const findStudent = await studentRepository
      .findOne(email);

    expect(findStudent)
      .toBeUndefined();

  });
});