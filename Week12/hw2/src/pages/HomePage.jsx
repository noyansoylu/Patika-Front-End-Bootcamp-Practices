import { useContext } from "react";
import { StarshipContext } from "../context/StarshipContext";
import StarshipList from "../components/StarshipList";

function HomePage() {
  const { starships, fetchStarships, loading, setSearchQuery } =
    useContext(StarshipContext);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="header">
        <h1>Star Wars Starships</h1>
        <input
          className="search"
          type="text"
          placeholder="Search Starships..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="container">
      <StarshipList starships={starships} />
      </div>
      <div className="footer">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={fetchStarships} disabled={!starships.length}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default HomePage;
