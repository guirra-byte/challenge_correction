import { StudentRepository } from '../../../../Repository/Implementations/StudentRepository';
import { CreateStudentUseCase } from "./CreateStudentUseCase";
import { CreateStudentController } from "./CreateStudentController";

const studentRepository = new StudentRepository();

const createStudentUseCase = new CreateStudentUseCase(studentRepository);

const createStudentController = new CreateStudentController(createStudentUseCase);

export { createStudentController }