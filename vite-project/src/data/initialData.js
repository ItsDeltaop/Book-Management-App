import AtomicHabits from "./assets/AtomicHabits.jpg";
import Book2 from "./assets/Book2.jpg";
import Book3 from "./assets/Book3.jpg";
import Book4 from "./assets/Book4.jpg";
import Book5 from "./assets/Book5.jpg";
import Book6 from "./assets/Book6.jpg";

export const initialBooks = [
  {
    id: "b1",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    genre: "Self Help",
    year: 2018,
    copies: 5,
    available: 3,
    rating: 4.8,
    description: "A practical guide to building good habits and breaking bad ones through small, consistent changes.",
    cover: AtomicHabits
  },
  {
    id: "b2",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "9780857197689",
    genre: "Finance",
    year: 2020,
    copies: 4,
    available: 2,
    rating: 4.7,
    description: "Timeless lessons on wealth, greed, happiness, and how people think about money.",
    cover: Book2
  },
  {
    id: "b3",
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    genre: "Technology",
    year: 2008,
    copies: 3,
    available: 1,
    rating: 4.6,
    description: "A handbook of agile software craftsmanship and principles for writing maintainable code.",
    cover: Book3
  },
  {
    id: "b4",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780062315007",
    genre: "Fiction",
    year: 1988,
    copies: 6,
    available: 6,
    rating: 4.5,
    description: "A philosophical novel about following your dreams and discovering the meaning of your personal legend.",
    cover: Book4
  },
  {
    id: "b5",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9781455586691",
    genre: "Productivity",
    year: 2016,
    copies: 4,
    available: 3,
    rating: 4.6,
    description: "Rules for focused success in a distracted world.",
    cover: Book5
  },
  {
    id: "b6",
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    isbn: "9780143130727",
    genre: "Lifestyle",
    year: 2016,
    copies: 3,
    available: 2,
    rating: 4.4,
    description: "A gentle exploration of the Japanese concept of finding purpose and a reason to get up each day.",
    cover: Book6
  }
];