import { Link } from 'react-router-dom';

function StarshipCard({ starship }) {
  return (
    <div className='starship-card'>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Speed: {starship.max_atmosphering_speed}</p>
      <Link to={`/starship/${starship.url.split('/').slice(-2, -1)[0]}`}>Details</Link>
    </div>
  );
}

export default StarshipCard;
