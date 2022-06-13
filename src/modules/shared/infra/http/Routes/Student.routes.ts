import { response, Router } from 'express';

import { CreateStudentInstanceIndex } from '../../../../Services/useCases/Student/CreateStudent';
import { FindOneStudentInstanceIndex } from '../../../../Services/useCases/Student/FindOneStudent';
import { FindAllStudentsInstanceIndex } from '../../../../Services/useCases/Student/FindAllStudents';
import { RemoveStudentInstanceIndex } from '../../../../Services/useCases/Student/RemoveStudent';

import { verifyStudentAlreadyExists } from '../middleware/VerifyStudentAlreadyExists';
import { VerifyStudentAuthTokenUseCase } from '../middleware/Token/Auth/VerifyStudentAuthToken';

const studentRoutes = Router();

studentRoutes.post('/', verifyStudentAlreadyExists, (request, response) => {

  return CreateStudentInstanceIndex(request, response);
});

studentRoutes.get('/student', VerifyStudentAuthTokenUseCase, (request, response) => {

  return FindOneStudentInstanceIndex(request, response);
});

studentRoutes.get('/students', (request, response) => {

  return FindAllStudentsInstanceIndex(request, response);
});

studentRoutes.delete('/remove', verifyStudentAlreadyExists, (request, response) => {

  return RemoveStudentInstanceIndex(request, response);
});

export { studentRoutes }