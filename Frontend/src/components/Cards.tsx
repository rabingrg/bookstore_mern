import { Course } from "../dummy-data/CoursesData";

const Cards = ({ data }: { data: Course }) => {
  const { name, title, price, image } = data;

  return (
    <>
      <div className="card w-92 bg-base-100 shadow-xl pt-10 my-4 hover:scale-105 duration-300">
        <figure>
          <img
            src={image}
            className="w-[150px] h-[150px] object-contain"
            alt="books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{name}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">$ {price}</div>
            <div className="px-2 py-0.5 rounded-xl cursor-pointer border-[1px] border-slate-800 hover:bg-pink-500 hover:border-pink-500 hover:text-white duration-200 ease-in-out">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
