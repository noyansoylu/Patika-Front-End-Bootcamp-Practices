import NumBox from './NumBox';

export default function NumbersList() {
  const numbersData = [
    { number: 325, label: 'Course' },
    { number: 405, label: 'Work Out' },
    { number: 305, label: 'Working Hour' },
    { number: 705, label: 'Happy Client' },
  ];

  return (
    <div className="numbers-list">
      {numbersData.map((item, index) => (
        <NumBox key={index} number={item.number} label={item.label} />
      ))}
    </div>
  );
}
