import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Homepage = () => {
  return (
    <div>
      <Banner />
      {/* <PhotoGallery /> */}
      <Category></Category>
    </div>
  );
};

export default Homepage;
