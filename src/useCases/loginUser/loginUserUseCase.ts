import { User } from "../../entities/User";
import { ITokenProvider } from "../../providers/TokenProvider/ITokenProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUserRequestDTO, ILoginUserResponseDTO } from "./loginUserDTO";

const md5 = require('md5');

export class LoginUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private tokenProvider: ITokenProvider
    ){}

    async execute(data: ILoginUserRequestDTO): Promise<ILoginUserResponseDTO>  {
        const userByEmail = await this.usersRepository.findByEmail(data.email);
        if (!userByEmail) {
            throw new Error('Invalid e-mail.');
        }

        if (md5(data.password) !== userByEmail.password) {
            throw new Error('Invalid login.');
        }

        const token = this.tokenProvider.encrypt(
            { 
                id: userByEmail.id,
                name: userByEmail.name,
                email: userByEmail.email,
                role: userByEmail.role
            });
                    
        return {
            id: userByEmail.id,
            name: userByEmail.name,
            email: userByEmail.email,
            role: userByEmail.role,
            token,
        }
    }
}