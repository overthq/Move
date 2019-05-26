import { Router } from 'express';
import { logIn, register, validateCode } from '../controllers/auth';

const router = Router();

router.post('/login', logIn);
router.post('/register', register);
router.get('validate-code', validateCode);

export default router;
