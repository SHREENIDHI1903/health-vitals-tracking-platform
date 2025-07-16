import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


interface AuthenticatedRequest extends Request {
  user: { id: string }; // Expand this shape as needed
}
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    (req as AuthenticatedRequest).user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token verification failed' });
  }
};

