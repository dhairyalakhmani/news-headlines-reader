import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './components/NewsItem';
import SearchBar from './components/SearchBar';
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [readArticleIds, setReadArticleIds] = useState([]);
  const [expandedArticleUrl, setExpandedArticleUrl] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  useEffect(() => { 
    const fetchNews = async () => {
      try {
        console.log("my api key : ", VITE_API_KEY)
        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&q=${searchQuery}&apiKey=${VITE_API_KEY}`;
        const response = await axios.get(URL);
        console.log(response.data.articles)
        setArticles(response.data.articles || []);
      } catch (error) {
        console.log("3. Fetch Error:", error.response ? error.response.data : error.message);
      }
    };
    fetchNews();
  }, [selectedCategory, submittedQuery]);

  const handleCategoryClick = category => {
    setSelectedCategory(category.toLowerCase());
  };

  const handleExpandToggle = (url) => {
    setExpandedArticleUrl(expandedArticleUrl === url ? null : url);
  };

  const handleMarkAsRead = (url) => {
    if (!readArticleIds.includes(url)) {
      setReadArticleIds([...readArticleIds, url]);
    }
  };

  const handleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for: ", searchQuery);
    setSubmittedQuery(searchQuery);

  }

  const categories = ['General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
            NewsReader
          </h1>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 py-1 px-3 rounded-full">
              Read: {readArticleIds.length} / {articles.length}
            </span>
            <button 
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xl border"
              onClick={handleDarkMode}
            > 
                {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearchSubmit}
        />
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-indigo-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
  {articles && articles.length > 0 ? (
    articles.map((article, index) => {
      if (article.title === "[Removed]") return null;
      
      return (
        <NewsItem
          key={article.url || index}
          article={article}
          isRead={readArticleIds.includes(article.url)}
          isExpanded={expandedArticleUrl === article.url}
          onExpandToggle={() => handleExpandToggle(article.url)}
          onMarkAsRead={() => handleMarkAsRead(article.url)}
        /> 
      );
    })
  ) : (
    <p className="text-center text-slate-500 mt-10 font-medium">
      No Recent Headlines To Show Currently...
    </p>
  )}
</div>
      </main>
    </div>
  );
}

export default App;