export function filterCountries(countries, filtersData, searchItem) {
  const filters = [];
  for (const [key, value] of Object.entries(filtersData)) {
    if (value === true) filters.push(key);
  }
  let newFilteredCountries = countries.filter((country) => {
    if (filters.includes(country.region)) {
      return true;
    }
  });


  if (filters.includes("un")) {
    newFilteredCountries = newFilteredCountries.filter(
      (country) => country.unMember
    );
  }
  if (filters.includes("independent")) {
    newFilteredCountries = newFilteredCountries.filter(
      (country) => country.independent
    );
  }

  newFilteredCountries = newFilteredCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchItem.toLowerCase())
  );
  return newFilteredCountries;
}
