import { Router } from 'express';
import { newRide, listUserRides } from '../controllers/rides';

const router = Router();

router.get('/', listUserRides);
router.post('/new', newRide);

export default router;
