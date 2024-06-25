import { createContext, ReactNode, useState } from "react";
import { Course } from "../dummy-data/CoursesData";

interface BookContextProps {
  allBookData: Course[];
  handleSetAllBookData: (data: Course[]) => void;
}

export const BookContext = createContext<BookContextProps>({
  allBookData: [],
  handleSetAllBookData: () => {},
});

interface ChildrenProps {
  children: ReactNode;
}

export const BookContextProvider = ({ children }: ChildrenProps) => {
  const [allBookData, setAllBookData] = useState<Course[]>([]);
  const handleSetAllBookData = (data: Course[]) => {
    setAllBookData(data);
  };

  return (
    <BookContext.Provider value={{ allBookData, handleSetAllBookData }}>
      {children}
    </BookContext.Provider>
  );
};
