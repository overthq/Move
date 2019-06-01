import { Router, RequestHandler } from 'express';
import { createTicket, purchaseTicket } from '../controllers/tickets';
import { accessTokenMiddleware } from '../middleware';

const router = Router();

router.post('/create', createTicket);
router.post(
	'/purchase',
	accessTokenMiddleware as RequestHandler,
	purchaseTicket
);

export default router;
