import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Information from "../Information/Information";

const Homepage = () => {
  return (
    <div>
      <Banner />
      {/* <PhotoGallery /> */}
      <Category></Category>
      <Information />
      <Contact />
    </div>
  );
};

export default Homepage;
