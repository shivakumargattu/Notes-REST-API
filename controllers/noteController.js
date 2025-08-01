import Note from '../models/Note.js';

// 📝 Get all notes for the logged-in user
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes: ' + error.message });
  }
};

// ➕ Create a new note
export const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  try {
    const note = await Note.create({ title, content, userId: req.userId });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note: ' + error.message });
  }
};

// ✏️ Update a note
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const note = await Note.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ error: 'Note not found or not authorized' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note: ' + error.message });
  }
};

// 🗑️ Delete a note
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findOneAndDelete({ _id: id, userId: req.userId });

    if (!note) {
      return res.status(404).json({ error: 'Note not found or not authorized' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note: ' + error.message });
  }
};
