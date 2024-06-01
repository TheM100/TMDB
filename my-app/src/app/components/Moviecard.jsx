function Moviecard() {
    return (
      <div className="w-11/12 h-5/6 bg-green-500 flex flex-col items-center justify-center rounded-lg">
       
        <img
          className="w-full h-full object-scale-down rounded-lg"
          src="https://picsum.photos/400/520"
          alt=""
        />
      </div>
    );
  }
  
  export default Moviecard;