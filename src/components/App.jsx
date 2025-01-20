import React, { useState } from 'react';
import Tabs from './Tabs';
import TodoList from './TodoList';
import Notes from './Notes';

const App = () => {
  const [activeTab, setActiveTab] = useState('TodoList');

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">Notes</h1>
            </div>
            <div className="mt-5">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
              <div className="mt-4">
                {activeTab === 'TodoList' && <TodoList />}
                {activeTab === 'Notes' && <Notes />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;