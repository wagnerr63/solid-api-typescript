import { uuid } from 'uuidv4';
const md5 = require('md5');

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public role: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }

        this.password = md5(this.password);
    }
}