import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository{
    private users: User[] = [
        { 
            id: '1asdasd',
            name: 'Wagner',
            email: 'wagner@mail.com',
            password: '449977705b5208d07a4ad68da3ff6ac5',
            role: 'admin'
        }
    ];

    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}