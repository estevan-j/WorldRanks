export const sortCountries = (countries, sortBy = "Population") => {
  if (sortBy === "Name") {
    return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } else if (sortBy === "Population") {
    return countries.sort((a, b) => b.population - a.population);
  } else if (sortBy === "Area") {
    return countries.sort((a, b) => b.area - a.area);
  }
};
