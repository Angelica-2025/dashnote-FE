import { NoteForm } from './components/NoteForm.jsx';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-[90%] md:max-w-[600px]">
        <NoteForm />
      </div>
    </div>
  );
};
