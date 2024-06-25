import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Courses = () => {
  const { allBookData } = useContext(BookContext);
  console.log("allBookData", allBookData);

  return (
    <>
      <div className="w-screen ">Corsss</div>
    </>
  );
};

export default Courses;
