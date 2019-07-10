import { Router } from 'express';
import { saveCard } from '../controllers/credit-cards';

const router = Router();

router.post('/save', saveCard);

export default router;
