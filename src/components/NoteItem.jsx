import { useState } from "react";

export const NoteItem = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleDelete = () => {
    if (window.confirm('¿Seguro que quieres eliminar esta nota?')) {
      onDelete(note.id);
    }
  };

  const handleSave = () => {
    onUpdate(note.id, {
      title: editedTitle,
      content: editedContent
    });
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border p-2 rounded-lg" />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="border p-2 rounded-lg resize-none h-24" />
          <div className="flex justify-end gap-3">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all text-sm">
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-all text-sm">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold">{note.title}</h3>
          <p className="text-gray-700">{note.content}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all text-sm">
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all text-sm">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};
