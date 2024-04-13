import "./HomePage.scss";
import Search from "../components/icons/Search";
import CountriesList from "../components/CountriesList/CountriesList";
import Regions from "../components/Regions/Regions";
import { useEffect, useState } from "react";
import { fetchCountries } from "../utils/fechtCountries";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState({
    'Americas': false,
    'Antarctic': false,
    'Africa': false,
    'Asia': true,
    'Europe': TextTrackCue,
    'Oceania': false
  });
  const [status, setStatus] = useState({
    'un': false,
    'independent': false,
  })
  const [searchInput, setSearchInput] = useState("");

  const [sortBy, setSortBy] = useState('Population');
  
  
  const handleChangeStatus = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({
      ...prevStatus,
      [e.target.value]: !prevStatus[e.target.value],  
    }))
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries('all');
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  return (
    <>
      <main>
        <header>
          <h3>
            Found <span>{countries.length}</span> contries
          </h3>
          <div className="container-input">
            <Search />
            <input
              id="search-input"
              type="text"
              placeholder="Search by Name, Region, Subregion"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </header>
        <div className="left-section">
          <div className="sort-by">
            <p>Sort by</p>
            <select id="sort" name="sortBy" onChange={(e) => setSortBy(e.target.value)}>
              <option value="Population" defaultChecked>
                Population
              </option>
              <option value="Name">Name</option>
              <option value="Area">Area</option>
            </select>
          </div>
          <Regions regions={regions} setRegions={setRegions}/>
          <div className="status-container">
            <p>Status</p>
            <label htmlFor="un">
              <input
                id="un"
                name="un"
                type="checkbox"
                value='un'
                onChange={(e) => handleChangeStatus(e)}
              />
              Member of the United Nations
            </label>
            <label htmlFor="independent">
              <input
                id="independent"
                name="independent"
                type="checkbox"
                value='independent'
                onChange={(e) => handleChangeStatus(e)}
              />
              Independent
            </label>
          </div>
        </div>
        <div className="right-section">
          <CountriesList countries={countries} sortBy={sortBy} filters={{...regions, ...status}} searchItem={searchInput}  />
        </div>
      </main>
    </>
  );
};

export default HomePage;
