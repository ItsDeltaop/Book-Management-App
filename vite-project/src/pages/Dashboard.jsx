import { Link } from "react-router-dom";
import { BookOpen, Copy} from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { useBooks } from "../context/BookContext";

export default function Dashboard() {
  const { books} = useBooks();
  const totalCopies = books.reduce((sum, b) => sum + Number(b.copies), 0);
  const available = books.reduce((sum, b) => sum + Number(b.available), 0);

  const getBook = (id) => books.find(b => b.id === id);

  return (
    <>
      <PageHeader eyebrow="Overview" title="Good morning, Reader." description="Here's what's happening across your library today." action={<Link className="primary-btn" to="/books/new">+ Add book</Link>} />
      <section className="stats-grid">
        <StatCard label="Total books" value={books.length} note={`${totalCopies} total copies`} icon={BookOpen}/>
        <StatCard label="Available copies" value={available} note={`${Math.round((available / Math.max(totalCopies,1))*100)}% of collection`} icon={Copy} trend/>
      </section>

        <section className="panels-grid">
        <div className="panel">
          <div className="panel-header"><div><h2>Collection snapshot</h2><p>Most popular genres</p></div></div>
          <div className="genre-list">
            {Object.entries(books.reduce((acc, b) => { acc[b.genre] = (acc[b.genre] || 0) + 1; return acc; }, {}))
              .sort((a,b) => b[1]-a[1]).slice(0,5).map(([genre, count]) =>
                <div className="genre-row" key={genre}><span>{genre}</span><div className="bar"><i style={{width: `${Math.max(15, count/books.length*100)}%`}}/></div><b>{count}</b></div>
              )}
          </div>
        </div>
      </section>
    </>
  );
}