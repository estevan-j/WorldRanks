import { useParams } from "react-router-dom";
import "./CountryPage.scss";
import { useEffect, useState } from "react";
import { fetchCountries } from "../utils/fechtCountries";
const CountryPage = () => {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(
          data.filter((country) => country.name.common !== "Antarctica")
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    function setCountryByName() {
      try {
        const newCountry = countries.find(
          (country) => country.name.common.toLowerCase() === name.toLowerCase()
        );
        // console.log(newCountry);
        setCountry(newCountry);
      } catch (error) {
        console.error("Error setting country name:", error);
      }
    }
    if (!loading) {
      // Only set country when data is available
      setCountryByName();
    }
  }, [countries, loading, name]);

  function getCurrencyName(country) {
    if (country && country.currencies) {
      const currencyCode = Object.keys(country.currencies)[0];
      return country.currencies[currencyCode].name;
    }
  }

  function getNeighbours() {
    if (!loading && country.borders && country.borders.length > 0) {
      return country.borders.map((border) => {
        return countries.filter((country) => country.cca3 === border)[0];
      });
    }
    return [];
  }

  return (
    <>
      {!loading && country && (
        <section>
          <div className="container-flat">
            <img id="flat" src={country.flags.svg} alt={country.name.common} />
          </div>
          <div className="country-text">
            <div className="name-country">{country.name.common}</div>
            <p>{country.name.official}</p>
          </div>
          <div className="country-details">
            <div className="container-detail">
              <div className="right">Population</div>
              <div className="left">{country.population.toLocaleString()}</div>
            </div>
            <div className="container-detail">
              <div className="right">Area(km^2)</div>
              <div className="left">{country.area.toLocaleString()}</div>
            </div>
          </div>
          <div className="information">
            <div className="information-item">
              <span className="field">Capital</span>
              <p>{country.capital}</p>
            </div>
            <div className="information-item">
              <span className="field">Subregion</span>
              <p>{country.subregion}</p>
            </div>
            <div className="information-item">
              <span className="field">Language</span>
              <p>{Object.values(country.languages).join(", ")}</p>
            </div>
            <div className="information-item">
              <span className="field">Currencies</span>
              <p>{getCurrencyName(country)}</p>
            </div>
            <div className="information-item">
              <span className="field">Continents</span>
              <p>{country.continents}</p>
            </div>
          </div>
          <div className="neighbors">
            <span className="neighbors-title">Neighbouring Countries</span>
            <div className="flat-neighbors">
              {getNeighbours().map((country, index) => (
                <div key={index}>
                  <img
                    src={country.flags.svg}
                    alt="neighbour flag"
                  />
                  <small>{country.name.common}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryPage;
