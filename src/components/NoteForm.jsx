import { useState } from 'react';

export const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', {
      title,
      description,
      fileName: file?.name,
    });

    setTitle('');
    setDescription('');
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Create Note</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-4 rounded-xl border border-gray-300 resize-none focus:ring-2 focus:ring-blue-400"
        rows="5"
        required
      ></textarea>

      <input
        type="file"
        onChange={handleFileChange}
        className="p-2"
        accept="image/*,application/pdf"
      />

      {previewUrl && (
        <div className="mt-4">
          {file?.type.startsWith('image/') ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="rounded-xl w-full h-auto object-contain max-h-64"
            />
          ) : file?.type === 'application/pdf' ? (
            <iframe
              src={previewUrl}
              className="w-full h-64 border rounded-xl"
              title="PDF Preview"
            ></iframe>
          ) : (
            <p>Unsupported file format.</p>
          )}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all"
      >
        Save Note
      </button>
    </form>
  );
};
