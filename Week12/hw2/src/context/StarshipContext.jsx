import { createContext, useEffect, useState } from 'react';

export const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState('https://swapi.dev/api/starships/');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchStarships = () => {
    if (!nextPage) return;

    setLoading(true);
    fetch(nextPage)
      .then(response => response.json())
      .then(data => {
        setStarships(prevStarships => [...prevStarships, ...data.results]);
        setNextPage(data.next);
      })
      .catch(error => {
        console.error('Failed to fetch starships:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  const filteredStarships = starships.filter(starship =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StarshipContext.Provider
      value={{ starships: filteredStarships, fetchStarships, loading, setSearchQuery }}
    >
      {children}
    </StarshipContext.Provider>
  );
};
