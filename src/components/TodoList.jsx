import React, { useState, useEffect } from 'react';
import SubTabs from './SubTabs';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [lists, setLists] = useState({});
  const [activeList, setActiveList] = useState(null);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedLists = localStorage.getItem('todoLists');
    if (storedLists) {
      try {
        setLists(JSON.parse(storedLists));
      } catch (error) {
        console.error("Error parsing stored todoLists:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(lists).length > 0) {
      localStorage.setItem('todoLists', JSON.stringify(lists));
    }
  }, [lists]);

  const handleCreateNewList = () => {
    const newListTitle = prompt('Enter new list name:');
    if (newListTitle && !lists[newListTitle]) {
      setLists(prevLists => ({ ...prevLists, [newListTitle]: [] }));
      setActiveList(newListTitle);
    }
  };

  const handleListClick = (listTitle) => {
    setActiveList(listTitle);
  };

  const handleDeleteList = (listToDelete) => {
    console.log("Attempting to delete list:", listToDelete);
    setLists(prevLists => {
      const { [listToDelete]: removedList, ...updatedLists } = prevLists;
      console.log("Lists after deletion:", updatedLists);

      // Update activeList after state is updated
      if (activeList === listToDelete) {
        const newActiveList = Object.keys(updatedLists)[0] || null;
        console.log("New active list:", newActiveList);
        setActiveList(newActiveList);
      }
      return updatedLists;
    });
  };

  const handleAddTask = () => {
    if (newTask.trim() && activeList) {
      setLists(prevLists => ({
        ...prevLists,
        [activeList]: [...prevLists[activeList], { text: newTask.trim(), completed: false }],
      }));
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    setLists(prevLists => {
      if (!prevLists[activeList]) return prevLists; // Defensive check
      const updatedList = prevLists[activeList].map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      return { ...prevLists, [activeList]: updatedList };
    });
  };

  const handleDeleteTask = (index) => {
    setLists(prevLists => {
      if (!prevLists[activeList]) return prevLists; // Defensive check
      const updatedList = prevLists[activeList].filter((_, i) => i !== index);
      return { ...prevLists, [activeList]: updatedList };
    });
  };

  const listKeys = Object.keys(lists);

  useEffect(() => {
    if (listKeys.length > 0 && !activeList) {
      setActiveList(listKeys[0]);
    }// eslint-disable-next-line
  }, [listKeys]); 

  return (
    <div>
      <SubTabs
        items={listKeys}
        activeItem={activeList}
        onItemClick={handleListClick}
        onCreateNew={handleCreateNewList}
        onDeleteItem={handleDeleteList}
      />

      {activeList && lists[activeList] && (
        <div className="mt-4">
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="Nouvelle Tâche"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
          <ul>
            {lists[activeList]?.map((task, index) => ( // Added optional chaining
              <TodoItem
                key={index}
                index={index}
                task={task}
                onToggleComplete={handleToggleComplete}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        </div>
      )}
      {!activeList && listKeys.length > 0 && (
        <p className="text-gray-500 mt-2">Sélectionnez Une Liste de Tâches, ou crééz-en une nouvelle..</p>
      )}
      {!activeList && listKeys.length === 0 && (
        <p className="text-gray-500 mt-2">Aucune Liste de Tâches pour le moment!</p>
      )}
    </div>
  );
};

export default TodoList;