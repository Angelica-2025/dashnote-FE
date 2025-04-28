import { NoteItem } from './NoteItem.jsx';

export const NoteList = () => {
  const dummyNotes = [
    { id: 1, title: 'First Note', description: 'This is the first note.' },
    { id: 2, title: 'Second Note', description: 'Another note for testing.' },
  ];

  return (
    <div className="bg-white shadow-lg p-6 rounded-2xl flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center mb-2">Your Notes</h2>

      {dummyNotes.length === 0 ? (
        <p className="text-center text-neutral-500">No notes yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {dummyNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};
