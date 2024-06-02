// components/Hero.js
"use client";
import { fetchTopRatedMovies } from "@/API/Movies/response";
import React, { useEffect, useState } from "react";


function Hero() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   async function loadMovies() {
  //     const movies = await fetchTopRatedMovies();
  //     setMovies(movies);
  //     console.log(movies)
  //   }

  //   loadMovies();
  // }, []);
  return (
    <section className="w-full h-heroSize">
      <div className="w-full h-full relative flex items-center bg-[url('https://cdn.leonardo.ai/users/be6f4fcf-f918-450f-a54b-b46b96cd9cd4/generations/278b57bb-b141-44ad-9d47-4f47f3665c18/Default_two_cars_black_of_front_0.jpg')] bg-cover bg-center bg-no-repeat">
      <div id="aqui" className="absolute top-1/2 left-36 transform -translate-y-1/2 w-2/6 h-5/6 rounded-lg border-2 border-glass bg-glass backdrop-blur-md">
          Infor peliculas
        </div>
      </div>
    </section>
  );
}

export default Hero;

  