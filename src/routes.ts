import { response, Router } from 'express'
import { createUserController } from './useCases/createUser';
import { loginUserController } from './useCases/loginUser';

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/users/login', (request, response) => {
    return loginUserController.handle(request, response);
})

export { router } 