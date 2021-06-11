import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUserRequestDTO, ILoginUserResponseDTO } from "./loginUserDTO";

const md5 = require('md5');

class LoginUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute(data: ILoginUserRequestDTO): Promise<ILoginUserResponseDTO>  {
        const userByEmail = await this.usersRepository.findByEmail(data.email);
        if (!userByEmail) {
            throw new Error('Invalid e-mail.');
        }

        if (md5(data.password) !== userByEmail.password) {
            throw new Error('Invalid login.');
        }

        // const tokenJWT = some JWT provider
    }
}