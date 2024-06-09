import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="max-w-screen-2xl ">
        <Navbar /> <Banner /> <Footer />
      </div>
    </>
  );
};

export default App;
