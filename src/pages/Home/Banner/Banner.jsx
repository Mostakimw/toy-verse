const Banner = () => {
  return (
    <div className="relative h-screen">
      <img
        className="object-cover h-full w-full opacity-70"
        src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=1060&t=st=1684366178~exp=1684366778~hmac=a263630d2ccc6ef522e7012b7e149ac68224406ff14f887bc51f1f7e4f974ad5"
        alt="Banner"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-6">
        <h1 className="text-4xl text-gray-800 font-bold">
          Toy Haven - Where Fun Begins!
        </h1>
        <p className="text-xl text-gray-800 w-2/3 mx-auto text-center">
          Welcome to Toy Haven, your one-stop destination for a world of fun!
          Explore our extensive collection of toys designed to inspire laughter,
          curiosity, and endless play.{" "}
        </p>
        <button className="btn btn-outline">Explore More</button>
      </div>
    </div>
  );
};

export default Banner;
