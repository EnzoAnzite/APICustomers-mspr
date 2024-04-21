import bcrypt from 'bcrypt';

//le middleware pour hasher le mot de passe
export async function hashPassword(next: () => void, user: any) {
    if (user.isModified('password') || user.isNew) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
}
