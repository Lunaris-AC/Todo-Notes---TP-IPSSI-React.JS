import React from 'react';
import { TrashIcon } from '@heroicons/react/solid'; // installer @heroicons/reactv1

const TodoItem = ({ index, task, onToggleComplete, onDeleteTask }) => {
  return (
    <li className="flex justify-between items-center py-2 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
          checked={task.completed}
          onChange={() => onToggleComplete(index)}
        />
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
      </div>
      <button onClick={() => onDeleteTask(index)} className="text-red-500 hover:text-red-700 focus:outline-none">
        <TrashIcon className="h-5 w-5" />
      </button>
    </li>
  );
};

export default TodoItem;