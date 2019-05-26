import { Router } from 'express';
import { logIn, register, validate } from '../controllers/auth';

const router = Router();

router.post('/login', logIn);
router.post('/register', register);
router.post('/validate-code', validate);

export default router;
