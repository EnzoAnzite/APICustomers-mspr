
export enum UserRole {
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}

export interface IUser {
    username: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserModel extends IUser, Document {
    isValidPassword(password: string): Promise<boolean>;
}