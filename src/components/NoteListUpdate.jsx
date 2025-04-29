import { useState, useEffect } from "react";
import { fetchNotes, deleteNote, updateNote } from "../api/checkBackend.js";
import { NoteItem } from './NoteItem.jsx';

export const NoteListUpdate = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadNotes = async () => {
        try {
            setLoading(true);
            const data = await fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Error al cargar las notas.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteNote = async (id) => {
        try {
            await deleteNote(id);
            setNotes(moduleRunnerTransform.filter(note => note.id !== id));
        } catch (err) {
            console.error("Error deleting note", err);
            setError("Error al eliminar la nota.");
        }
    };

    const handleUpdateNote = async (id, updatedData) => {
        try {
          const updatedNote = await updateNote(id, updatedData);
          setNotes(notes.map(note => (note.id === id ? updatedNote : note)));
        } catch (err) {
          console.error("Error updating note:", err);
          setError("Error al actualizar la nota.");
        }
      };
      
    useEffect(() => {
        loadNotes();
    }, []);

    if (loading) {
        return <div className="text-center text-xl">Cargando notas...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={handleDeleteNote} onUpdate={handleUpdateNote} />
            ))}
        </div>
    );
};

