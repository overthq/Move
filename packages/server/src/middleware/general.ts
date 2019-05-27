import { ErrorRequestHandler, RequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
	return res.status(500).json({
		success: false,
		message: error
	});
};

export const notFoundMiddleware: RequestHandler = (req, res, next) => {
	return res.status(404).json({
		success: false,
		message: 'Are you sure you meant to hit this route?'
	});
};
