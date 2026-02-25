import { useState } from "react";

export default function LikedQuotes({ likedQuotes }) {
  const [search, setSearch] = useState("");

  const filtered = likedQuotes.filter((q) =>
    (q.quote || "").toLowerCase().includes(search.toLowerCase()) ||
    (q.author || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="liked-section">
      <h2>❤️ Liked Quotes ({likedQuotes.length})</h2>

      <input
        type="text"
        placeholder="Search liked quotes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {likedQuotes.length === 0 ? (
        <p>No liked quotes yet!</p>
      ) : filtered.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {filtered.map((q) => (
            <li key={q.id}>
              <p>"{q.quote}"</p>
              <p>— {q.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
