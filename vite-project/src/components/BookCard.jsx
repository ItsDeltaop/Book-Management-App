import { Link } from "react-router-dom";
import { BookOpen, Edit3, Trash2, Star } from "lucide-react";

export default function BookCard({ book, onDelete }) {
  return (
    <article className="book-card">
      <div className="cover-wrap">
        {book.cover ? <img src={book.cover} alt={`${book.title} cover`} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }} /> : null}
        <div className="cover-fallback"><BookOpen size={30}/></div>
        <span className="availability">{book.available > 0 ? `${book.available} available` : "Unavailable"}</span>
      </div>
      <div className="book-info">
        <span className="genre">{book.genre}</span>
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <div className="book-meta"><span><Star size={14} fill="currentColor"/> {book.rating}</span><span>{book.year}</span></div>
      </div>
      <div className="card-actions">
        <Link to={`/books/edit/${book.id}`} className="icon-btn" title="Edit"><Edit3 size={16}/></Link>
        <button className="icon-btn danger" title="Delete" onClick={() => onDelete(book.id)}><Trash2 size={16}/></button>
      </div>
    </article>
  );
}