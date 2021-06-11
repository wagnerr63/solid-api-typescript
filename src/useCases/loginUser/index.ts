import { JwtTokenProvider } from "../../providers/TokenProvider/implamentations/JwtTokenProvider";
import { PostgresUsersRepository } from "../../repositories/implamentations/PostgresUsersReposity";
import { LoginUserController } from "./loginUserController";
import { LoginUserUseCase } from "./loginUserUseCase";

const jwtTokenProvider = new JwtTokenProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const loginUserUseCase = new LoginUserUseCase(postgresUsersRepository, jwtTokenProvider);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserUseCase, loginUserController }; 