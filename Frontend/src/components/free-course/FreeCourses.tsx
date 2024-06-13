import { Course, CourseList } from "../../dummy-data/CourseData";
import { StyledContainer } from "../../style/Style";
import SliderComponent from "../SliderComponent";

const FreeCourses = () => {
  const freeCourses = CourseList?.filter(
    (course: Course) => course?.price == 0
  );

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
