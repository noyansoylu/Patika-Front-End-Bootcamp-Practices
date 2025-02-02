import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <div className='starship-list'>
      {starships.map((starship, index) => (
        <StarshipCard key={index} starship={starship} />
      ))}
    </div>
  );
}

export default StarshipList;
