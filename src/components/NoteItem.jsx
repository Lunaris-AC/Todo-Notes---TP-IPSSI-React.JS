import React from 'react';

const NoteItem = ({ title, onClick }) => {
  return (
    <button
      className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default NoteItem;