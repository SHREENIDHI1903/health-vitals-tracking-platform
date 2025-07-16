// src/db.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB Connected ✅');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // exit if connection fails
  }
};
