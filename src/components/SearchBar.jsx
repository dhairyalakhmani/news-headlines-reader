import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <div className="mb-8 w-full">
      <form 
        className="flex gap-3 w-full"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-full px-6 py-3 text-base font-medium text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors shadow-sm placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          Search
        </button>
      </form>
    </div>
  );
}