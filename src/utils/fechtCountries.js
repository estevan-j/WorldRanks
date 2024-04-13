const uri = "https://restcountries.com/v3.1";

export async function fetchCountries(path) {
    try {
      const response = await fetch(`${uri}/${path || 'all'}`);
      return await response.json(); // Return the parsed JSON directly
    } catch (error) {
      throw new Error(`Error fetching countries: ${error.message}`); // Throw the error for handling in the component
    }
  }
  
