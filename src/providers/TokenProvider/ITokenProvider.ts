export interface IPayload {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface ITokenProvider {
    encrypt(payload: IPayload): string;
    decrypt(token: string): IPayload;
}