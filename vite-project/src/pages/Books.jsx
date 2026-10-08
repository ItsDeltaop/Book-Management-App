import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import PageHeader from "../components/PageHeader";
import BookCard from "../components/BookCard";
import { useBooks } from "../context/BookContext";

export default function Books() {
  const { books, deleteBook } = useBooks();
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = ["All", ...new Set(books.map(b => b.genre))];
  const filtered = useMemo(() => books.filter(b => {
    const matches = `${b.title} ${b.author} ${b.isbn}`.toLowerCase().includes(query.toLowerCase());
    return matches && (genre === "All" || b.genre === genre);
  }), [books, query, genre]);

  const remove = (id) => {
    if (window.confirm("Delete this book? This will also remove its transaction history.")) deleteBook(id);
  };

  return <>
    <PageHeader eyebrow="Collection" title="Books" description={`${books.length} titles in your library.`} action={<Link className="primary-btn" to="/books/new">+ Add book</Link>} />
    <div className="toolbar">
      <div className="search-box"><Search size={18}/><input placeholder="Search title, author or ISBN..." value={query} onChange={e => setQuery(e.target.value)}/></div>
      <div className="select-wrap"><SlidersHorizontal size={16}/><select value={genre} onChange={e => setGenre(e.target.value)}>{genres.map(g => <option key={g}>{g}</option>)}</select></div>
    </div>
    <div className="book-grid">
      {filtered.map(book => <BookCard key={book.id} book={book} onDelete={remove}/>)}
    </div>
    {!filtered.length && <div className="empty-state"><Search size={30}/><h3>No books found</h3><p>Try another search or category.</p></div>}
  </>;
}