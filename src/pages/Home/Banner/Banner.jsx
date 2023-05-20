const Banner = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r ">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          className="object-cover h-full w-full opacity-70"
          src="https://img.freepik.com/free-vector/happy-children-playing-different-sports_1308-128112.jpg?w=1480&t=st=1684612596~exp=1684613196~hmac=da4ac8914d8c1364a339f7d19f1c72e2781494417b32eecac6ef0d44a1afd21f"
          alt="Banner"
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <h1 className="text-6xl font-bold text-center text-white ">
            Toy Verse - Where Fun Begins!
          </h1>
          <p className="text-xl text-white lg:w-1/3 px-3 mx-auto text-center">
            Welcome to Toy Verse, your one-stop destination for a world of fun!
            Explore our extensive collection of toys designed to inspire
            laughter, curiosity, and endless play.
          </p>
          <button className="btn btn-outline border-white text-white hover:bg-[#CF4B5A] hover:border-none transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
