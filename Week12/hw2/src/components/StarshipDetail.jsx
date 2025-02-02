function StarshipDetail({ starship }) {
  if (!starship) return <p>Loading...</p>;

  return (
    <div className='starship-detail'>
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Crew: {starship.crew}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
    </div>
  );
}

export default StarshipDetail;
