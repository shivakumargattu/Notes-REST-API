// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import User from './models/User.js'
import Note from './models/Note.js'

dotenv.config();          // Load environment variables
connectDB();              // Connect to MongoDB

const app = express();    // ✅ Initialize express app first

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);   // User Register/Login routes
app.use('/api/notes', noteRoutes);  // Notes CRUD routes (protected)

app.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '_id name email'); // Basic user info
    const notes = await Note.find({}, 'title content userId'); // Notes list

    // Map userId to email/name
    const userMap = {};
    users.forEach(user => {
      userMap[user._id] = { name: user.name, email: user.email };
    });

    const notesWithUser = notes.map(note => ({
      title: note.title,
      content: note.content,
      user: userMap[note.userId] || 'Unknown User'
    }));

    res.json({
      message: 'All notes with user details',
      totalUsers: users.length,
      totalNotes: notes.length,
      notes: notesWithUser
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
