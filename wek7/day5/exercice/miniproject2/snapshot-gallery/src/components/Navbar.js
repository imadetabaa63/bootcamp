import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/search/${search}`);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/mountain">Montagne</Link></li>
        <li><Link to="/beach">Plages</Link></li>
        <li><Link to="/birds">Oiseaux</Link></li>
        <li><Link to="/food">Gastronomie</Link></li>
      </ul>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </nav>
  );
};

export default Navbar;
