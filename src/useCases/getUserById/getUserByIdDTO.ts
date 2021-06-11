// Data Transfer Object
export interface IGetUserByIdRequestDTO {
    id: string;
}
export interface IGetUserByIdResponseDTO {
    id: string;
    name: string;
    email: string;
    role: string;
}