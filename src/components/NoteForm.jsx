// src/components/NoteForm.jsx
import { useState } from "react";
import { createNote } from "../api/checkBackend.js";

export const NoteForm = ({ onNoteCreated }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        try {
            await createNote({ title, content });
            setTitle("");
            setContent("");
            if (onNoteCreated) {
                onNoteCreated();
            }
        } catch (error) {
            console.error("Error submitting note:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Title"
                className="border p-3 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                className="border p-3 rounded-lg resize-none h-32"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
            >
                Add Note
            </button>
        </form>
    );
};
