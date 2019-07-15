import { Router } from 'express';

import auth from './auth';
import rides from './rides';
import trips from './trips';
import wallets from './wallets';

const router = Router();

router.use('/auth', auth);
router.use('/rides', rides);
router.use('/trips', trips);
router.use('/wallets', wallets);

export default router;
