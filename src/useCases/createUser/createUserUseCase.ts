import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/MailProvider/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Team Sunny',
                email: 'team@sunny.com'
            },
            subject: `Seja bem-vindo ao Sunny, ${data.name}!`,
            body: `<p>Olá ${data.name}, seu ID é ${user.id} (${data.role}) e você já pode fazer login com seu e-mail (${data.email}) e sua senha (${user.password}).</p>`
        });
    }
}