import { useEffect, useState } from "react";
import { checkBackendStatus } from "./api/checkBackend.js";
import { NoteForm } from "./components/NoteForm.jsx";
import { NoteListUpdate } from "./components/NoteListUpdate.jsx";


export const App = () => {
  const [backendUp, setBackendUp] = useState(true);

  useEffect(() => {
    const verifyBackend = async () => {
      const isUp = await checkBackendStatus("http://localhost:8080/api/notes"); 
      setBackendUp(isUp);
    };
    verifyBackend();
  }, []);

  if (!backendUp) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">Backend Unreachable 🚨</h1>
          <p className="mt-4 text-gray-600">Please make sure your server is running on port 8080.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">DashNote 📒</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <NoteForm />
        </div>
        <div className="w-full md:w-1/2">
          <NoteListUpdate />
        </div>
      </div>
    </div>
  );
};

