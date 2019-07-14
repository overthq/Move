import { Router } from 'express';

import auth from './auth';
import creditCards from './credit-cards';
import rides from './rides';
import trips from './trips';

const router = Router();

router.use('/auth', auth);
router.use('/credit-cards', creditCards);
router.use('/rides', rides);
router.use('/trips', trips);

export default router;
