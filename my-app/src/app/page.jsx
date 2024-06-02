"use client";
import { fetchPopularMovies } from "@/API/Movies/response";
import { fetchPopularSeries } from "@/API/Movies/response";
import { fetchNowPlayingMovies } from "@/API/Movies/response";
import { fetchTopRatedMovies } from "@/API/Movies/response";
import { fetchUpcomingMovies } from "@/API/Movies/response";
import { fetchMovies } from "@/API/Movies/response";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";
import Carrucel from "./components/carrucel";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [moviesPN, setMoviesPN] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesUpcoming, setMoviesUpcomig] = useState([]);

  const [seriesPopular, setSeriesPopular] = useState([]);
  // const [moviesFamily, setMoviesFamily] = useState([]);

  useEffect(() => {
    async function loadMovies() {

      //FECTH PARA CARRUCEL POPULAR
      const moviesDataPopu = await fetchPopularMovies();
      setMoviesPopular(moviesDataPopu);

      const seriesDataPopu = await fetchPopularSeries();
      setSeriesPopular(seriesDataPopu);
      console.log(seriesDataPopu)


      //FECTH PARA CARRUCEL TOP RATED
      const moviesData = await fetchTopRatedMovies();
      setMovies(moviesData);

      //FECTH PARA CARRUCEL PLAYING NOW
      const moviesDataPN = await fetchNowPlayingMovies();
      setMoviesPN(moviesDataPN);
    

      
      //FECTH PARA CARRUCEL UPCOMING
      const moviesDataUPCOMING = await fetchUpcomingMovies();
      setMoviesUpcomig(moviesDataUPCOMING);
    }

    loadMovies();
  }, []);

 
  // useEffect(() => {
  //   async function loadMovies() {
  //     const moviesData = await fetchMovies();
      
  //     // Filtramos directamente después de obtener la data y antes de establecer el estado
  //     const filteredMoviesA = moviesData.filter(movie => movie.genre_ids.includes(28));
  //     setMoviesAccion(filteredMoviesA);
  //     // console.log(filteredMoviesA)

  //     const filteredMoviesF = moviesData.filter(movie => movie.genre_ids.includes(10751));
  //     setMoviesFamily(filteredMoviesF);
  //     console.log(filteredMoviesF)
  //   }
  
  //   loadMovies();
  // }, []);

  return (
    <main className="flex flex-col w-full min-h-screen overflow-y-auto mt-16">
      <Hero/>

      <Carrucel title="+Popular" movies={moviesPopular} />
      <Carrucel title="Top Rater" movies={movies} />
      <Carrucel title="Playing now" movies={moviesPN} />
      <Carrucel title="Upcoming" movies={moviesUpcoming} />
      
      
      
    </main>
  );
}
