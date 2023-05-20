const Banner = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <img
        className="object-cover h-full w-full opacity-70"
        src="https://img.freepik.com/free-photo/top-view-basketballs-with-football_23-2148796920.jpg?w=1380&t=st=1684578923~exp=1684579523~hmac=c9153a21e3bbab2a66d1c947b05e819ba86c05a19d356b27d433f04f123817ed"
        alt="Banner"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-6">
        <h1 className="text-4xl text-white font-bold text-center">
          Toy Verse - Where Fun Begins!
        </h1>
        <p className="text-xl text-white lg:w-1/3 px-3 mx-auto text-center">
          Welcome to Toy Verse, your one-stop destination for a world of fun!
          Explore our extensive collection of toys designed to inspire laughter,
          curiosity, and endless play.{" "}
        </p>
        <button className="btn btn-outline border-white text-white  hover:bg-[#CF4B5A] hover:border-none transition-all duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Banner;
