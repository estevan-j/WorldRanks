import { Link } from "react-router-dom";
import "./ContriesList.scss";
import { useEffect, useState } from "react";
import { sortCountries } from "../../utils/sortCountries";
import { filterCountries } from "../../utils/filterCountries";

// eslint-disable-next-line react/prop-types
const CountriesList = ({ countries, sortBy, filters, searchItem}) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  
  useEffect(() => {
    let filteredData = filterCountries(countries, filters, searchItem);
    filteredData = sortCountries(filteredData, sortBy);
    console.log(filteredData);
    setFilteredCountries(filteredData);
  }, [countries, sortBy, filters, searchItem])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, idx) => (
            <>
              <tr key={idx}>
                <td>
                  <Link to={`/country/${country.name.common.toLowerCase()}`}>
                    <img
                      id="flag"
                      src={country.flags.svg}
                      alt={country.flags.alt}
                    />
                  </Link>
                </td>
                <td>{country.name.common}</td>
                <td>{country.population.toLocaleString()}</td>
                <td>{country.area.toLocaleString()}</td>
                <td>{country.region}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CountriesList;
