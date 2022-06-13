import { response, Router } from 'express';

import { createStudentController } from '../../../../Services/useCases/Student/CreateStudent';
import { findOneStudentController } from '../../../../Services/useCases/Student/FindOneStudent';
import { findAllStudentController } from '../../../../Services/useCases/Student/FindAllStudents';
import { removeStudentController } from '../../../../Services/useCases/Student/RemoveStudent';

import { verifyStudentAlreadyExists } from '../middleware/VerifyStudentAlreadyExists';
import { VerifyStudentAuthTokenUseCase } from '../middleware/Token/Auth/VerifyStudentAuthToken';

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