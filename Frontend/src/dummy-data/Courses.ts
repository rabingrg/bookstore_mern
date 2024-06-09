export interface Course {
  id: number;
  name: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const CourseList: Course[] = [
  {
    id: 1,
    name: "George Orwell",
    title: "1984",
    price: 0,
    category: "Dystopian",
    image: "https://via.placeholder.com/150/0000FF/808080?text=1984",
  },
  {
    id: 2,
    name: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    price: 12.99,
    category: "Fantasy",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Harry+Potter",
  },
  {
    id: 3,
    name: "J.R.R. Tolkien",
    title: "The Lord of the Rings",
    price: 0,
    category: "Fantasy",
    image: "https://via.placeholder.com/150/00FF00/000000?text=LOTR",
  },
  {
    id: 4,
    name: "Harper Lee",
    title: "To Kill a Mockingbird",
    price: 8.99,
    category: "Classic",
    image: "https://via.placeholder.com/150/FFFF00/000000?text=Mockingbird",
  },
  {
    id: 5,
    name: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    price: 0,
    category: "Classic",
    image: "https://via.placeholder.com/150/000000/FFFFFF?text=Gatsby",
  },
  {
    id: 6,
    name: "Jane Austen",
    title: "Pride and Prejudice",
    price: 0,
    category: "Romance",
    image:
      "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Pride+and+Prejudice",
  },
  {
    id: 7,
    name: "Markus Zusak",
    title: "The Book Thief",
    price: 11.99,
    category: "Historical Fiction",
    image: "https://via.placeholder.com/150/00FFFF/000000?text=Book+Thief",
  },
  {
    id: 8,
    name: "Herman Melville",
    title: "Moby Dick",
    price: 9.49,
    category: "Adventure",
    image: "https://via.placeholder.com/150/800080/FFFFFF?text=Moby+Dick",
  },
  {
    id: 9,
    name: "Mary Shelley",
    title: "Frankenstein",
    price: 0,
    category: "Horror",
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Frankenstein",
  },
  {
    id: 10,
    name: "Gabriel Garcia Marquez",
    title: "One Hundred Years of Solitude",
    price: 13.99,
    category: "Magical Realism",
    image:
      "https://via.placeholder.com/150/FFC0CB/000000?text=One+Hundred+Years",
  },
];
