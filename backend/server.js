import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/student', studentRoutes);

// Root route (optional, for testing)
app.get('/', (req, res) => {
  res.send('Backend is running successfully 🚀');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected.."))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

// Export app for Vercel
export default app;
