import {Request, Response } from 'express';
import { LoginUserUseCase } from './loginUserUseCase'

export class LoginUserController {
    constructor(
        private loginUserUseCase: LoginUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const userLogin = await this.loginUserUseCase.execute({ email, password });

            return response.status(201).send(userLogin)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}