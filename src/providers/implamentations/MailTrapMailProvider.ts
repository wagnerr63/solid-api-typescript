import { IMailProvider, IMessage } from "../IMailProvider";

export class MailtrapMailProvider implements IMailProvider {
    constructor(

    ){}

    async sendMail(message: IMessage): Promise<void> {

    }
}