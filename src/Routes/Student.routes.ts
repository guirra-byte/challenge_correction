import { response, Router } from 'express';

import { createStudentController } from '../modules/Services/useCases/Student/CreateStudent';
import { findOneStudentController } from '../modules/Services/useCases/Student/FindOneStudent';
import { findAllStudentController } from '../modules/Services/useCases/Student/FindAllStudents';

import { verifyStudentAlreadyExists } from '../modules/middleware/VerifyStudentAlreadyExists';
import { VerifyStudentAuthTokenUseCase } from '../modules/middleware/Token/Auth/VerifyStudentAuthToken';
import { removeStudentController } from '../modules/Services/useCases/Student/RemoveStudent';

const studentRoutes = Router();

studentRoutes.post('/', verifyStudentAlreadyExists, (request, response) => {

  return createStudentController
    .handle(request, response);
});

studentRoutes.get('/student', VerifyStudentAuthTokenUseCase, (request, response) => {

  return findOneStudentController
    .handle(request, response);
});

studentRoutes.get('/students', (request, response) => {

  return findAllStudentController
    .handle(request, response);
});

studentRoutes.delete('/remove', verifyStudentAlreadyExists, (request, response) => {

  return removeStudentController
    .handle(request, response);
})

export { studentRoutes }