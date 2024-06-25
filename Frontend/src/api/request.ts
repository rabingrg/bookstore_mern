import axios from "axios";
import { Course } from "../dummy-data/CoursesData";
// import CONFIG from "../config/config";

export interface BookInterface {
  id: number;
  name: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface BookResponseInterface {
  data: Course[];
}

const book = {
  getBooks: (): Promise<BookResponseInterface> => {
    return axios.get("http://localhost:4001/book/getBooks");
  },
};

export const request = { book };
