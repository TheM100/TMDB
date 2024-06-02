// api.js
//PETICIONES PARA SERIES Y PELICULAS POPULARES
export async function fetchPopularMovies() {                      //MOVIES
  const URL = 'https://api.themoviedb.org/3/movie/popular';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDlmYTc1ODdlNTcwZTVhM2UzYzBiNTFmNjdiN2ViNyIsInN1YiI6IjY2NTY4ODI4ZDA5MjUzMjIwNmU0ZDFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onPk9OjVeN6-7DMXsBc6dykgjYpxSdc8JywEi5jyVA0'
    }
  };

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.results; // assuming you want only the results array
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}


export async function fetchPopularSeries() {                      //SERIES
  const URL = 'https://api.themoviedb.org/3/tv/popular';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDlmYTc1ODdlNTcwZTVhM2UzYzBiNTFmNjdiN2ViNyIsInN1YiI6IjY2NTY4ODI4ZDA5MjUzMjIwNmU0ZDFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onPk9OjVeN6-7DMXsBc6dykgjYpxSdc8JywEi5jyVA0'
    }
  };

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.results; // assuming you want only the results array
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


//PETICIONES PARA SERIES Y PELICULAS TOP RATED
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
  
//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


//PETICIONES PARA SERIES Y PELICULAS PLAYING NOW
  export async function fetchNowPlayingMovies() {
    const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDlmYTc1ODdlNTcwZTVhM2UzYzBiNTFmNjdiN2ViNyIsInN1YiI6IjY2NTY4ODI4ZDA5MjUzMjIwNmU0ZDFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onPk9OjVeN6-7DMXsBc6dykgjYpxSdc8JywEi5jyVA0'
      }
    };
  
    try {
      const response = await fetch(URL, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data.results; // assuming you want only the results array
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  }
  //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


//PETICIONES PARA SERIES Y PELICULAS UPCOMING
  export async function fetchUpcomingMovies() {
    const URL = 'https://api.themoviedb.org/3/movie/upcoming';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDlmYTc1ODdlNTcwZTVhM2UzYzBiNTFmNjdiN2ViNyIsInN1YiI6IjY2NTY4ODI4ZDA5MjUzMjIwNmU0ZDFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onPk9OjVeN6-7DMXsBc6dykgjYpxSdc8JywEi5jyVA0'
      }
    };
  
    try {
      const response = await fetch(URL, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data.results; // assuming you want only the results array
    } catch (error) {
      console.error('Error fetching  movies:', error);
      return [];
    }
  }
 //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

 

//PETICIONES PARA SERIES Y PELICULAS PARA FILTROS
  export async function fetchMovies() {
    const URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDlmYTc1ODdlNTcwZTVhM2UzYzBiNTFmNjdiN2ViNyIsInN1YiI6IjY2NTY4ODI4ZDA5MjUzMjIwNmU0ZDFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onPk9OjVeN6-7DMXsBc6dykgjYpxSdc8JywEi5jyVA0'
      }
    };
  
    try {
      const response = await fetch(URL, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data.results; // assuming you want only the results array
    } catch (error) {
      console.error('Error fetching  movies:', error);
      return [];
    }
  }
  
  

  
  