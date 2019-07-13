import { Router } from 'express';
import {
	createTrip,
	listAllTrips,
	updateTripStatus,
	getTrip
} from '../controllers/trips';

const router = Router();

router.get('/', listAllTrips);
router.post('/create', createTrip);
router.put('/update', updateTripStatus);
router.get('/:tripId', getTrip);

export default router;
