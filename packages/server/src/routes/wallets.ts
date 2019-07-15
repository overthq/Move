import { Router } from 'express';
import { createWallet } from '../controllers/wallets';

const router = Router();

router.post('/create', createWallet);

export default router;
