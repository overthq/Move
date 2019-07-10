import { Router } from 'express';

import auth from './auth';
import tickets from './tickets';
import creditCards from './credit-cards';

const router = Router();

router.use('/auth', auth);
router.use('/tickets', tickets);
router.use('/credit-cards', creditCards);

export default router;
