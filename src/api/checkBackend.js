
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

// Eliminar una nota por su ID
export async function deleteNote(id) {
  try {
    const response = await axios.delete(`http://localhost:8080/api/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
}

//Actualizar una nota por su ID
export async function updateNote(id, updateData) {
  try {
    const response = await axios.put(`http://localhost:8080/api/notes/${id}`, uddateData);
    return response.data;
  } catch (error) {
    console.error('Error updtaing note:', error);
    throw error;
  }
}
