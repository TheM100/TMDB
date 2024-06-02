'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Moviecard from "./Moviecard";
import classnames from "classnames";
import "../globals.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      className={`${className} custom-arrow custom-next`}
      style={{ ...style, display: "flex", background: "rgba(29, 33, 84, 0.66)" , width: "50px",
      height: "50%", alignItems: "center", justifyContent: "center", right:"0", zIndex:'10', borderTopRightRadius: "30%", borderBottomRightRadius: "30%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    // className={className}
    className={`${className} custom-arrow custom-next`}
    style={{ ...style, display: "flex", background: "rgba(29, 33, 84, 0.66)" , width: "50px",
    height: "50%", alignItems: "center", justifyContent: "center", left:"0", zIndex:'10',borderTopLeftRadius: "30%", borderBottomLeftRadius: "30%"}}
    onClick={onClick}
    />
  );
}

function Carrucel(props) {
  const { title, movies } = props;
  // console.log(topMovies)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000, // Duración de la animación de desplazamiento
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="slick-dots "> {dots} </ul>
      </div>
    ),
  };
    return (
       <>
       <div className='h-96 w-full my-4  flex flex-col  rounded-lg'>
       <h4 className="text-white text-xl ml-10">{title}</h4>
       <Slider {...settings} className="w-full h-6/6   text-white ">
          {movies.map(movie => (
            <Moviecard key={movie.id} poster={movie.poster_path}/>
          ))}
          
      </Slider>
       </div>
       </>
    );
    
  }
  
  

export default Carrucel;