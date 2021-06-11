import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserByIdRequestDTO } from "./getUserByIdDTO";

class GetUserByIdUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(data: IGetUserByIdRequestDTO) {
        const user = await this.usersRepository.findById(data.id);
    }
}