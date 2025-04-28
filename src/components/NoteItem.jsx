export const NoteItem = ({ note }) => {
    
    return (
      <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4">
        <h3 className="text-xl font-bold">{note.title}</h3>
        <p className="text-gray-700">{note.description}</p>
        <div className="flex justify-end gap-3">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all text-sm">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all text-sm">
            Delete
          </button>
        </div>
      </div>
    );
  };
  