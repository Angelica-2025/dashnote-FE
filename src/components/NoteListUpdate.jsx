import { useState, useEffect } from "react";
import { fetchNotes } from "../api/checkBackend.js";

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
                <div key={note.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-lg mb-2">{note.title}</h3>
                    <p className="text-gray-700">{note.content}</p>
                </div>
            ))}
        </div>
    );
};

