import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, role, password } = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                role,
                password
            });

            return response.status(201).send();
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }

    }
}