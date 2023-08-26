export type UserModel = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    file: File; 
};


export type UserModelGetRequest={
    name: string;
    email: string;
    role:string,
    isEmailVerified:boolean,
    id:string
}