import { EmailInput } from "./input/Input";
import bannerBooks from "../assets/images/booksimage.jpg";
import { StyledContainer } from "../style/Style";

const Banner = () => {
  return (
    <>
      <StyledContainer className="flex flex-col md:flex-row gap-10 mt-20 md:mt-10 md:gap-0">
        <div className="w-full md:w-1/2 mt-8 md:mt-20 order-2 md:order-1">
          <div className="space-y-8 px-6">
            <h1 className="text-4xl font-bold ">
              Hello, welcome here to learn{" "}
              <span className="text-purple-500">something new everyday!!</span>
            </h1>
            <p className="text-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              laborum nemo ad molestiae neque? Esse, tenetur ipsam. Ratione,
              nulla dolorum quibusdam quisquam sapiente et sit dolor totam,
              numquam quasi consequatur!
            </p>
            <EmailInput />
            <button className="btn btn-accent">Subscribe</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-20 md:py-16 order-1 flex items-center justify-center">
          <img
            src={bannerBooks}
            alt="banner books"
            className="w-[90%] h-[90%]"
          />
        </div>
      </StyledContainer>
    </>
  );
};

export default Banner;
