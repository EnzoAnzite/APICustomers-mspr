import { Request, Response } from 'express';
import User from '../models/User.ts';


class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { username, email, password, role } = req.body;
            // logger.message(req.body);
            const newUser = new User({
                username,
                email,
                password,
                role
            });
            await newUser.save();
            return res.status(201).json(newUser);
        } catch (error : any) {
            return res.status(500).json({ message : error.message });
        }
    }

    public async getAllUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error: any) {
            return res.status(500).json({ message : error.message });
        }
    }

    public async getUserById(req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({ message : error.message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const { username, email, role } = req.body;
            const user = await User.findByIdAndUpdate(req.params.id, {
                username,
                email,
                role
            }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({ message : error.message });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error: any) {
            return res.status(500).json({ message : error.message });
        }
    }
}

export default new UserController();
