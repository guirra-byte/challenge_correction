import { StudentRepositoryInMemory } from "../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory";
import { FindAllStudentUseCase } from "../Services/useCases/Student/FindAllStudents/FindAllStudentUseCase";
import { CreateStudentUseCase } from "../Services/useCases/Student/CreateStudent/CreateStudentUseCase";

let studentRepository: StudentRepositoryInMemory;
let findAllStudentUseCase: FindAllStudentUseCase;
let createStudentUseCase: CreateStudentUseCase;

describe("Find All Students", () => {

  beforeEach(async () => {

    studentRepository = new StudentRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(studentRepository);
    findAllStudentUseCase = new FindAllStudentUseCase(studentRepository);

  });

  it("Should be able List all Students", async () => {

    const student1 = {

      name: "Student1 Name Test",
      email: "Student1 Email Test",
      password: "Student1 Password Test",
      challenges: [{
        title: "Query Database",
        instructionsUrl: "www.DeusProvera.com.br", id: "V84816756", studentId: "MabelIsReal"
      },]
    }

    const student2 = {

      name: "Student2 Name Test",
      email: "Student2 Email Test",
      password: "Student1 Password Test",
      challenges: [{
        title: "Query Database",
        instructionsUrl: "www.DeusProvera.com.br", id: "V84816756", studentId: "MabelIsReal"
      },]
    }

    const student3 = {

      name: "Student3 Name Test",
      email: "Student3 Email Test",
      password: "Student3 Password Test",
      challenges: [{
        title: "Query Database",
        instructionsUrl: "www.DeusProvera.com.br", id: "V84816756", studentId: "MabelIsReal"
      },]
    }

    await createStudentUseCase
      .execute(student1.name, student1.email, student1.password, student1.challenges);

    await createStudentUseCase
      .execute(student2.name, student2.email, student2.password, student2.challenges);

    await createStudentUseCase
      .execute(student3.name, student3.email, student3.password, student3.challenges);

    const findAllStudents = await findAllStudentUseCase
      .execute();

    expect(findAllStudents)
      .not
      .toBeUndefined();

    expect(findAllStudents)
      .toHaveLength(3)
  })
})