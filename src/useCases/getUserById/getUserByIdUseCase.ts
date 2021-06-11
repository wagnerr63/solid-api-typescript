import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserByIdRequestDTO, IGetUserByIdResponseDTO } from "./getUserByIdDTO";

export class GetUserByIdUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(data: IGetUserByIdRequestDTO): Promise<IGetUserByIdResponseDTO> {
        const user = await this.usersRepository.findById(data.id);
        if (!user) {
            throw new Error('User not found.');
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        };

    }
}