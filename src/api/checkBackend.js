
// src/api/checkBackend.js
import axios from 'axios';

// Verificar si el backend está arriba
export async function checkBackendStatus(url) {
  try {
    const response = await axios.get(url);
    return response.status === 200;
  } catch (error) {
    console.error('Error checking backend status:', error);
    return false;
  }
}

// Crear una nueva nota
export async function createNote(noteData) {
  try {
    const response = await axios.post('http://localhost:8080/api/notes', noteData);
    return response.data;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
}

// Obtener todas las notas
export async function fetchNotes() {
  try {
    const response = await axios.get('http://localhost:8080/api/notes');
    return response.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
}

