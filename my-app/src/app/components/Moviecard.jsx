function Moviecard(props) {
  const { poster} = props;
  const imageUrl = `https://image.tmdb.org/t/p/w200${poster}`;
  // console.log(imageUrl);
    return (
      <div className="w-11/12 h-5/6  rounded-lg">
       
        <img
          className="w-full h-full object-scale-down rounded-lg"
          src={imageUrl}
          alt=""
        />
      </div>
    );
  }
  
  export default Moviecard;