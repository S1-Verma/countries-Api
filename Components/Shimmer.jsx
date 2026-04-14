import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({length:10}).map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
