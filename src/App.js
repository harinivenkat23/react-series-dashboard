import { useState } from 'react';
import SectionBlock from './components/SectionBlock';
import SeriesCard from './components/SeriesCard';
import './MainLayout.css';
import { trendingSeries, upcomingSeries } from './data';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showTrending, setShowTrending] = useState(true);

  const trendingSeries = [
    { name: 'Dark', rating: '8.9', category: 'Thriller' },
    { name: 'Stranger Things', rating: '8.7', category: 'Sci-Fi' },
    { name: 'Money Heist', rating: '8.3', category: 'Action' },
    { name: 'Breaking Bad', rating: '9.5', category: 'Drama' },
    { name: 'Wednesday', rating: '8.2', category: 'Mystery' }
  ];

  const upcomingSeries = [
    { name: 'Fallout', rating: 'N/A', category: 'Post-apocalyptic' },
    { name: 'The Penguin', rating: 'N/A', category: 'Crime' }
  ];

  const toggleTrending = () => {
    setShowTrending(!showTrending);
  };

  const filteredTrending = trendingSeries
    .filter(series =>
      series.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(series =>
      selectedCategory === 'All' || series.category === selectedCategory
    );

  return (
    <div>
      <h1>🎬 Series Management Dashboard</h1>

      <button onClick={toggleTrending}>
        {showTrending ? 'Hide' : 'Show'} Trending Series
      </button>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option>All</option>
          <option>Thriller</option>
          <option>Sci-Fi</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Mystery</option>
        </select>
      </div>

      {showTrending && (
        <>
          <SectionBlock title="Trending Series" />
          <div className="series-container">
            {filteredTrending.map((series, index) => (
              <SeriesCard
                key={index}
                name={series.name}
                rating={series.rating}
                category={series.category}
              />
            ))}
          </div>
        </>
      )}

      <SectionBlock title="Upcoming Series" />
      <div className="series-container">
        {upcomingSeries.map((series, index) => (
          <SeriesCard
            key={index}
            name={series.name}
            rating={series.rating}
            category={series.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
