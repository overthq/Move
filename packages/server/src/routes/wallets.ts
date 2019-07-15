import { Router } from 'express';
import {
	createWallet,
	purchasePoints,
	verifyWallet
} from '../controllers/wallets';

const router = Router();

router.post('/create', createWallet);
router.post('/topup', purchasePoints);
router.post('/verify', verifyWallet);

export default router;
