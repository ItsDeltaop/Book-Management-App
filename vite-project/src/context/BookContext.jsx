import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialBooks} from "../data/initialData";

const BookContext = createContext(null);

const read = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export function BookProvider({ children }) {
  const [books, setBooks] = useState(() => read("libra-books", initialBooks));

  useEffect(() => localStorage.setItem("libra-books", JSON.stringify(books)), [books]);

  const addBook = (book) => setBooks((prev) => [...prev, { ...book, id: crypto.randomUUID() }]);

  const updateBook = (id, changes) =>
    setBooks((prev) => prev.map((book) => (book.id === id ? { ...book, ...changes } : book)));

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const resetData = () => {
    setBooks(initialBooks);
  };

  const value = useMemo(() => ({
    books, addBook, updateBook, deleteBook,
     resetData
  }), [books]);

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export const useBooks = () => useContext(BookContext);