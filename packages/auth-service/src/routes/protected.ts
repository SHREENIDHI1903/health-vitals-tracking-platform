import express from 'express';
import { requireAuth } from '../middleware/auth';

const router = express.Router();
/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Access protected dashboard route
 *     description: Requires a valid JWT token in the Authorization header
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome message for authenticated users
 *       401:
 *         description: Missing or invalid token
 *       403:
 *         description: Token verification failed
 */
router.get('/dashboard', requireAuth, (req, res) => {
  const user = (req as unknown as { user: { id: string } }).user;
  res.send(`Welcome, user ${user.id}`);
});

export default router;
