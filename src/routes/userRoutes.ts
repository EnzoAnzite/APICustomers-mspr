import { Router } from 'express';
import UserController from '../controllers/UserController.ts';
const router = Router();

router.post('/customers', UserController.createUser);
router.get('/customers', UserController.getAllUsers);
router.get('/customers/:id', UserController.getUserById);
router.put('/customers/:id', UserController.updateUser);
router.delete('/customers/:id', UserController.deleteUser);

export default router;