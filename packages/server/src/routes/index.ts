import { Router } from 'express';

import auth from './auth';
import creditCards from './credit-cards';
import rides from './rides';
import trips from './trips';
import wallets from './wallets';

const router = Router();

router.use('/auth', auth);
router.use('/credit-cards', creditCards);
router.use('/rides', rides);
router.use('/trips', trips);
router.use('/wallets', wallets);

export default router;
