import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 rounded-md ${
          activeTab === 'TodoList'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onTabChange('TodoList')}
      >
        Liste de Tâches
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          activeTab === 'Notes'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onTabChange('Notes')}
      >
        Notes
      </button>
    </div>
  );
};

export default Tabs;