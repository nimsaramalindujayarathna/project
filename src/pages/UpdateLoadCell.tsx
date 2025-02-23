import React, { useState } from 'react';

const UpdateLoadCell = () => {
  const [selectedGrocery, setSelectedGrocery] = useState('');
  const [currentLoadCell, setCurrentLoadCell] = useState('');
  const [newLoadCell, setNewLoadCell] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement load cell update logic
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Update Load Cell Assignment</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow rounded-lg p-6">
        <div>
          <label htmlFor="selectedGrocery" className="block text-sm font-medium text-gray-700">
            Select Grocery
          </label>
          <select
            id="selectedGrocery"
            value={selectedGrocery}
            onChange={(e) => setSelectedGrocery(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a grocery</option>
            {/* TODO: Add grocery options dynamically */}
          </select>
        </div>

        <div>
          <label htmlFor="currentLoadCell" className="block text-sm font-medium text-gray-700">
            Current Load Cell
          </label>
          <input
            type="text"
            id="currentLoadCell"
            value={currentLoadCell}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 sm:text-sm"
            disabled
          />
        </div>

        <div>
          <label htmlFor="newLoadCell" className="block text-sm font-medium text-gray-700">
            New Load Cell
          </label>
          <select
            id="newLoadCell"
            value={newLoadCell}
            onChange={(e) => setNewLoadCell(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a new load cell</option>
            {/* TODO: Add available load cell options dynamically */}
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Assignment
        </button>
      </form>
    </div>
  );
};

export default UpdateLoadCell;