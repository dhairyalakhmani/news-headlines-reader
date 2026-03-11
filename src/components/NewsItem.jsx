import React from 'react';

export default function NewsItem({
  article,
  isRead,
  isExpanded,
  onExpandToggle,
  onMarkAsRead
}) {

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-IN', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  return (
    <article
      className={`p-5 rounded-2xl shadow-sm border transition-all duration-200
        {/* TODO: 3. Write a ternary operator here. 
            If isRead is true: 'bg-slate-100 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50 opacity-75' 
            If false: 'bg-white border-slate-200 hover:shadow-md hover:border-indigo-200 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-indigo-500/50' 
        */}
      `}
    >
      <div className="flex flex-col sm:flex-row gap-4">

        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className={`w-full sm:w-48 h-32 object-cover rounded-xl ${isRead ? 'grayscale opacity-60' : ''}`}
          />
        )}

        <div className="flex-1">
          <div className="flex justify-between items-start gap-4">
            <h2
              onClick={onExpandToggle}
              className={`text-lg sm:text-xl font-semibold cursor-pointer transition-colors
                {/* TODO: 6. Add a ternary operator here. 
                    If isRead is true: 'line-through text-slate-500 dark:text-slate-400' 
                    If false: 'text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400' 
                */}
              `}
            >
              {article.title}
            </h2>
          </div>

          <div className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {article.source.name} • {formattedDate}
          </div>

          {isExpanded && article.description && (
            <div className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-indigo-200 dark:border-indigo-500/30 pl-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {article.description}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={onMarkAsRead}
              disabled={isRead}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${isRead
                  ? 'bg-slate-200 text-slate-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20'
                }`}
            >
              {isRead ? "✓ Read" : "Mark as Read"}
            </button>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Read full article →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}