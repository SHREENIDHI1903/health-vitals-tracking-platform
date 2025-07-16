import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db';
import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protected';
import { setupSwagger } from './utils/swagger';
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // or use "*" in dev
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
setupSwagger(app);

app.get('/health', (_req, res) => {
  res.send('Server is alive');
});

// Only start server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

export default app;