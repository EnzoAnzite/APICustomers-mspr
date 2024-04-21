import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import {IUser, UserRole} from '../interfaces/UserInterface.ts';
import { hashPassword } from '../middlewares/authMiddleware.ts';

//verifie la validité du format de l'email
function emailValidator(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, validate: emailValidator },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: Object.values(UserRole) },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next) {
    hashPassword(next, this);
});

userSchema.methods.isValidPassword = async function(this: IUser, password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};


const User = model<IUser>('User', userSchema);

export default User;