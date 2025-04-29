import axios from 'axios';
import BACKEND_URL from './config';

// Verificar si el backend está arriba
export async function checkBackendStatus() {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/notes`);
    return response.status === 200;
  } catch (error) {
    console.error('Error checking backend status:', error);
    return false;
  }
}

// Crear una nueva nota
export async function createNote(noteData) {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/notes`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
}

// Obtener todas las notas
export async function fetchNotes() {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/notes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  } 
}

// Eliminar una nota por su ID
export async function deleteNote(id) {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
}

// Actualizar una nota por su ID
export async function updateNote(id, updateData) {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/notes/${id}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
}

