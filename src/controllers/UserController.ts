import { Request, Response } from 'express';
import User from '../models/User.ts';


class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { username, email, password, role } = req.body;
            const newUser = new User({
                username,
                email,
                password,
                role
            });
            await newUser.save();
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating the user', error });
        }
    }

    public async getAllUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving users', error });
        }
    }

    public async getUserById(req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Error finding the user', error });
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
        } catch (error) {
            return res.status(500).json({ message: 'Error updating the user', error });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting the user', error });
        }
    }
}

export default new UserController();
