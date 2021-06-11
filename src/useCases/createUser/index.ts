import { MailtrapMailProvider } from "../../providers/MailProvider/implamentations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implamentations/PostgresUsersReposity";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository(); 

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository, 
    mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController}