// Data Transfer Object
export interface ILoginUserRequestDTO {
    email: string;
    password: string;
}

export interface ILoginUserResponseDTO {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
}