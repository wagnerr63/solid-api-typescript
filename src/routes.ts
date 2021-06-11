import { request, response, Router } from 'express'
import { createUserController } from './useCases/createUser';
import { getUserByIdController } from './useCases/getUserById';
import { loginUserController } from './useCases/loginUser';

const router = Router();

router.get('/users/:id', (request, response) => {
    return getUserByIdController.handle(request, response);
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/users/login', (request, response) => {
    return loginUserController.handle(request, response);
})

export { router } 