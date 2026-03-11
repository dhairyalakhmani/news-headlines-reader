# 📰 News Headlines Reader

A sleek, responsive React application built to fetch, filter, and track the latest top news headlines. This project was developed as part of a comprehensive React course to demonstrate proficiency in functional components, state management, side effects, and modern CSS frameworks.

## ✨ Features

* **Real-Time Data Fetching:** Integrates with [NewsAPI](https://newsapi.org/) to pull the latest headlines dynamically.
* **Category Filtering:** Users can seamlessly filter news by categories like Business, Technology, Entertainment, Sports, and Science.
* **Interactive UI:** Clickable headlines expand to reveal detailed article descriptions before redirecting to the full source.
* **Read Tracking:** A "Mark as Read" feature visually updates the UI (strike-through text, grayed-out images) and maintains a dynamic count of read articles vs. total articles.
* **Dark Mode Support:** A fully integrated dark theme toggle for a better user experience in low-light environments.
* **Responsive Design:** Mobile-first styling ensures the app looks great on devices of all sizes.

## 🛠️ Tech Stack

* **Frontend Library:** React (Hooks: `useState`, `useEffect`)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **API:** NewsAPI

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites
* Node.js installed on your machine.
* A free API key from [NewsAPI.org](https://newsapi.org/register).

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/vimalyad/news-headlines-reader.git](https://github.com/vimalyad/news-headlines-reader.git)
   cd news-headlines-reader

2. Install Dependencies : npm install
   
3. Set up Environment Variables:
  
4. Create a .env file in the root directory of the project.
  
5. Add your NewsAPI key to the file:
  
  Code snippet
  VITE_API_KEY=your_actual_api_key_here
  Start the development server: npm run dev
  The app will typically be running at http://localhost:5173.
