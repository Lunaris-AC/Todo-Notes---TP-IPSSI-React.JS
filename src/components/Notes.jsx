import React, { useState, useEffect } from 'react';
import SubTabs from './SubTabs';

const Notes = () => {
  const [notes, setNotes] = useState({});
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(notes).length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  const handleCreateNewNote = () => {
    const newNoteTitle = prompt('Titre de la Note:');
    if (newNoteTitle && !notes[newNoteTitle]) {
      setNotes({ ...notes, [newNoteTitle]: '' });
      setActiveNote(newNoteTitle);
    }
  };

  const handleNoteClick = (noteTitle) => {
    setActiveNote(noteTitle);
  };

  const handleNoteChange = (e) => {
    setNotes({ ...notes, [activeNote]: e.target.value });
  };

  const handleDeleteNote = (noteToDelete) => {
    const newNotes = { ...notes };
    delete newNotes[noteToDelete];
    setNotes(newNotes);

    if (activeNote === noteToDelete) {
      setActiveNote(Object.keys(newNotes)[0] || null);
    }
  };

  const noteKeys = Object.keys(notes);

  useEffect(() => {
    if (noteKeys.length > 0 && !activeNote) {
      setActiveNote(noteKeys[0]);
    }
  }, [noteKeys, activeNote]);

  return (
    <div>
      <SubTabs
        items={noteKeys}
        activeItem={activeNote}
        onItemClick={handleNoteClick}
        onCreateNew={handleCreateNewNote}
        onDeleteItem={handleDeleteNote}
      />

      {activeNote && (
        <div className="mt-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-60"
            placeholder="Tapez Votre Note Ici..."
            value={notes[activeNote] || ""}
            onChange={handleNoteChange}
          />
        </div>
      )}
      {!activeNote && noteKeys.length > 0 && (
        <p className="text-gray-500 mt-2">Sélectionnez Une note, ou crééz-en une nouvelle.</p>
      )}
      {!activeNote && noteKeys.length === 0 && (
        <p className="text-gray-500 mt-2">Aucune note pour le moment!</p>
      )}
    </div>
  );
};

export default Notes;