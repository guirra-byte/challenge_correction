import { StudentRepositoryInMemory } from "../../../../../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory";
import { CreateStudentAuthTokenUseCase } from "./CreateStudentAuthTokenUseCase";
import { CreateStudentAuthTokenController } from "./CreateStudentAuthTokenController";

const studentRepository = new StudentRepositoryInMemory();

const createStudentAuthTokenUseCase = new CreateStudentAuthTokenUseCase(studentRepository);

const createStudentAuthTokenController = new CreateStudentAuthTokenController(createStudentAuthTokenUseCase);

export { createStudentAuthTokenController }