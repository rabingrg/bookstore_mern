import axios from "axios";
import { Course } from "../dummy-data/CoursesData";
import { RegisterFields } from "../components/Register";
import { LoginFields } from "../components/Login";
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

const user = {
  signup: (body: RegisterFields) => {
    return axios.post("http://localhost:4001/user/signup", body);
  },
  login: (body: LoginFields) => {
    return axios.post("http://localhost:4001/login/", body);
  },
};

const book = {
  getBooks: (): Promise<BookResponseInterface> => {
    return axios.get("http://localhost:4001/book/getBooks");
  },
};

export const request = { book, user };
