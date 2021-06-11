import { IPayload, ITokenProvider } from "../ITokenProvider";
const jsonwebtoken = require('jsonwebtoken');

export class JwtTokenProvider implements ITokenProvider {
    constructor(){}

    encrypt(data: IPayload): string {
        const token = jsonwebtoken.sign(data, process.env.JWTSECRET, {
            expiresIn: 300 // expires in 5min
        });

        return token;
    }

    decrypt(token: string): IPayload {
        if(!token) {
            throw new Error('No token provided.');
        }

        return jsonwebtoken.verify(token, process.env.JWTSECRET, function(err, decoded: any[]) {
            if (err) throw new Error('Failed to authenticate token.');
            
            return decoded;
        });
    }
}