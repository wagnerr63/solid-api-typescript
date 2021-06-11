import { PostgresUsersRepository } from "../../repositories/implamentations/PostgresUsersReposity";

import { GetUserByIdUseCase } from "./getUserByIdUseCase";
import { GetUserByIdController } from "./getUserByIdController";

const postgresUsersRepository = new PostgresUsersRepository();

const getUserByIdUseCase = new GetUserByIdUseCase(postgresUsersRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export { getUserByIdUseCase, getUserByIdController }