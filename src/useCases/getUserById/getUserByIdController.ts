import { Request, Response } from 'express';
import { GetUserByIdUseCase } from './getUserByIdUseCase';

export class GetUserByIdController {
    constructor(
        private getUserByIdUseCase: GetUserByIdUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const user = await this.getUserByIdUseCase.execute({id});

            return response.status(201).send(user)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }

    }
}