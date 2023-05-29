// Define las acciones para las notas
export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note,
  };
};

export const deleteNote = (noteId) => {
  return {
    type: 'DELETE_NOTE',
    payload: noteId,
  };
};
