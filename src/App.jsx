import { useState, useEffect } from "react";
import "./App.css";
import LikedQuotes from "./components/LikedQuotes";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("likedQuotes") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);


  const fetchQuote = async () => {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    setQuote(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);


  const isLiked = likedQuotes.some((q) => q.id === quote?.id);

 
  const toggleLike = () => {
    if (isLiked) {
      setLikedQuotes(likedQuotes.filter((q) => q.id !== quote.id));
    } else {
      setLikedQuotes([...likedQuotes, quote]);
    }
  };

  return (
    <div className="app">
      <h1>🌞 Daily Motivation</h1>

      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="quote">"{quote?.quote}"</p>
            <p className="author">— {quote?.author}</p>
          </>
        )}

        <div className="buttons">
          <button onClick={toggleLike} disabled={loading}>
            {isLiked ? "❤️ Liked" : "🤍 Like"}
          </button>
          <button onClick={fetchQuote} disabled={loading}>
            New Quote
          </button>
        </div>
      </div>

      <LikedQuotes likedQuotes={likedQuotes} />
    </div>
  );
}
