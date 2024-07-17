import axios from "axios";
import { Course } from "../dummy-data/CoursesData";
import { RegisterFields } from "../components/Register";
import { LoginFields } from "../components/Login";
import { CONFIG } from "../config/config";
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
    return axios.post(`${CONFIG.BASE_URI}/user/signup`, body);
  },
  login: (body: LoginFields) => {
    return axios.post(`${CONFIG.BASE_URI}/login/`, body);
  },
};

const book = {
  getBooks: (): Promise<BookResponseInterface> => {
    return axios.get(`${CONFIG.BASE_URI}/book/getBooks`);
  },
};

export const request = { book, user };
