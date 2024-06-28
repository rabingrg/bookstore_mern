import { useContext, useEffect } from "react";
import { Course } from "../../dummy-data/CoursesData";
import { StyledContainer } from "../../style/Style";
import SliderComponent from "../SliderComponent";
import { request } from "../../api/request";
import { BookContext } from "../../context/BookContext";

const FreeCourses = () => {
  const { allBookData, handleSetAllBookData } = useContext(BookContext);
  const freeCourses = allBookData?.filter(
    (course: Course) => course?.price === 0
  );

  useEffect(() => {
    const getBookData = async () => {
      try {
        const res = await request.book.getBooks();
        const bookData = await res.data;
        handleSetAllBookData(bookData);
      } catch (error) {
        console.log("Error in fetching books: ", error);
      }
    };
    getBookData();
  }, []);

  return (
    <>
      <StyledContainer className="mt-5">
        <p className="text-2xl font-bold px-5">Free Courses</p>
        <p className="text-base px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-10">
          <SliderComponent data={freeCourses} />
        </div>
      </StyledContainer>
    </>
  );
};

export default FreeCourses;
