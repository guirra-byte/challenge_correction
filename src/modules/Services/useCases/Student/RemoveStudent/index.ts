import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { RemoveStudentUseCase } from "./RemoveStudentUseCase";
import { RemoveStudentController } from "./RemoveStudentController";

const studentRepository = StudentRepository.getInstance();

const removeStudentUseCase = new RemoveStudentUseCase(studentRepository);

const removeStudentController = new RemoveStudentController(removeStudentUseCase);

export { removeStudentController }