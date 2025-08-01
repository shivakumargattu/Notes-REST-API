import express from 'express';
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/noteController.js';

import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware);

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
