import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import Cards from "../Cards";
import { Course } from "../../dummy-data/CoursesData";

const Courses = () => {
  const { allBookData } = useContext(BookContext);
  console.log("allBookData", allBookData);

  return (
    <>
      <div className="w-full container flex items-center flex-col">
        <div className="flex items-center justify-center flex-col w-1/2 text-center gap-8 mt-4">
          <p className="text-2xl">
            We're delighted to have you{" "}
            <span className="text-purple-500">here !!</span>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            exercitationem quasi nesciunt autem, maiores explicabo? Aut eos quas
            at, impedit nemo delectus libero neque. Aspernatur corporis placeat
            pariatur inventore excepturi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allBookData?.map((book: Course) => (
            <Cards key={book?.id} data={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
