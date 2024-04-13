import "./Regions.scss";

// eslint-disable-next-line react/prop-types, no-unused-vars
// let regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];
const Regions = ({ regions, setRegions }) => {
  const handleClickRegion = (e) => {
    e.preventDefault();
    setRegions((prevState) => ({
      ...prevState,
      [e.target.value]: !prevState[e.target.value],
    }));
  };

  return (
    <div className="Region">
      <p>Region</p>
      <div className="region-contries">
        {Object.keys(regions).map((region) => (
          <button
            className={`${regions[region] ? "active-country" : ""}`}
            onClick={handleClickRegion}
            key={region}
            value={region}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Regions;
