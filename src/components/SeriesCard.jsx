function SeriesCard({ name, rating, category }) {
  const status = rating === 'N/A' ? 'Coming Soon' : 'Now Streaming';

  return (
    <div className="series-card">
      <h3>{name}</h3>
      <p>⭐ Rating: {rating}</p>
      <p>🎬 Genre: {category}</p>
      <p>📢 Status: {status}</p>
    </div>
  );
}

export default SeriesCard;

