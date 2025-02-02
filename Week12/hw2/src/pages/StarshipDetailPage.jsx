import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StarshipDetail from "../components/StarshipDetail";

function StarshipDetailPage() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`)
      .then((response) => response.json())
      .then((data) => setStarship(data));
  }, [id]);

  return (
    <div>
      <StarshipDetail starship={starship} />
      <div className="btn-placement">
        <button className="home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default StarshipDetailPage;
