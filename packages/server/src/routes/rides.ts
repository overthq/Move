import { Router } from 'express';
import { newRide } from '../controllers/rides';

const router = Router();

router.post('/new', newRide);

export default router;
