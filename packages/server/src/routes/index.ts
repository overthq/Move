import { Router } from 'express';

import auth from './auth';
import tickets from './tickets';

const router = Router();

router.use('/auth', auth);
router.use('/tickets', tickets);

export default router;
