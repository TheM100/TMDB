// api.js
export async function fetchTopRatedMovies() {
    const API_KEY = '649fa7587e570e5a3e3c0b51f67b7eb7';
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data.results; // assuming you want only the results array
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  }
  