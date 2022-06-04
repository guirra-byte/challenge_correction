import { CreateStudentAuthTokenUseCase } from "../../Services/useCases/Student/Token/Auth/CreateStudentAuthTokenUseCase";
import { CreateStudentUseCase } from '../../Services/useCases/Student/CreateStudent/CreateStudentUseCase';

import { StudentRepositoryInMemory } from "../../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory";

let createStudentAuthTokenUseCase: CreateStudentAuthTokenUseCase;
let studentRepository: StudentRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;

describe("Create Student Auth Token", () => {

  beforeEach(() => {

    studentRepository = new StudentRepositoryInMemory();
    createStudentAuthTokenUseCase = new CreateStudentAuthTokenUseCase(studentRepository);
    createStudentUseCase = new CreateStudentUseCase(studentRepository);
  });

  it("Should be able create a Student Auth Token", async () => {

    const studentTokenRequest = {

      name: "Student Name Test",
      email: "Student Email @ Test",
      password: "Student Password Test",
      challenge: [{ title: "Query Database", instructionsUrl: "www.GodIsGoodAllTheTime.com.br", id: "hjtus84816756", studentId: "s13oj53hirfofj-gsdugsg" }]
    }

    const { name, email, password, challenge } = studentTokenRequest;

    await createStudentUseCase
      .execute(name, email, password, challenge);

    const createStudentAuthToken = await createStudentAuthTokenUseCase
      .execute(email, password);

    expect(createStudentAuthToken)
      .toHaveProperty("token");
  })
})