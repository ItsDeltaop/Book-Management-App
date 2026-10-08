import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useBooks } from "../context/BookContext";

const blank = { title:"", author:"", isbn:"", genre:"Fiction", year:new Date().getFullYear(), copies:1, available:1, rating:4.5, cover:"", description:"" };

export default function AddBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addBook, updateBook } = useBooks();
  const existing = books.find(b => b.id === id);
  const [form, setForm] = useState(existing || blank);

  useEffect(() => { if (existing) setForm(existing); }, [existing]);

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    const payload = { ...form, year:Number(form.year), copies:Number(form.copies), available:Number(form.available), rating:Number(form.rating) };
    if (id) updateBook(id, payload); else addBook(payload);
    navigate("/books");
  };

  return <>
    <PageHeader eyebrow={id ? "Collection / Edit" : "Collection / New"} title={id ? "Edit book" : "Add a new book"} description="Keep your catalog information accurate and easy to discover." />
    <form className="form-card" onSubmit={submit}>
      <div className="form-section"><h2>Book information</h2><p>Basic details displayed across the library.</p></div>
      <div className="form-grid">
        <label>Title<input required value={form.title} onChange={e=>update("title",e.target.value)} placeholder="e.g. The Design of Everyday Things"/></label>
        <label>Author<input required value={form.author} onChange={e=>update("author",e.target.value)} placeholder="Author name"/></label>
        <label>ISBN<input value={form.isbn} onChange={e=>update("isbn",e.target.value)} placeholder="ISBN-13"/></label>
        <label>Genre<select value={form.genre} onChange={e=>update("genre",e.target.value)}>{["Fiction","Technology","Finance","Self Help","Productivity","Lifestyle","Science","History","Biography","Other"].map(g=><option key={g}>{g}</option>)}</select></label>
        <label>Publication year<input type="number" value={form.year} onChange={e=>update("year",e.target.value)}/></label>
        <label>Total copies<input type="number" min="1" value={form.copies} onChange={e=>update("copies",e.target.value)}/></label>
        <label>Available copies<input type="number" min="0" max={form.copies} value={form.available} onChange={e=>update("available",e.target.value)}/></label>
        <label>Rating<input type="number" min="0" max="5" step="0.1" value={form.rating} onChange={e=>update("rating",e.target.value)}/></label>
        <label className="full">Cover image URL<input value={form.cover} onChange={e=>update("cover",e.target.value)} placeholder="https://..."/></label>
        <label className="full">Description<textarea rows="5" value={form.description} onChange={e=>update("description",e.target.value)} placeholder="Short description of the book..."/></label>
      </div>
      <div className="form-actions"><Link className="secondary-btn" to="/books">Cancel</Link><button className="primary-btn" type="submit">{id ? "Save changes" : "Add book"}</button></div>
    </form>
  </>;
}