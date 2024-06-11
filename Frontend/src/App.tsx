import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeCourses from "./components/free-course/FreeCourses";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="max-w-screen-2xl ">
        <Navbar /> <Banner /> <FreeCourses /> <Footer />
      </div>
    </>
  );
};

export default App;
