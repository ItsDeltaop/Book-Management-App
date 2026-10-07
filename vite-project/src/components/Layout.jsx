import { NavLink, Outlet } from "react-router-dom";
import { BookOpen, LayoutDashboard, Library, Users, ArrowLeftRight, Plus, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Layout() {
  const [dark, setDark] = useState(() => localStorage.getItem("libra-theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("libra-theme", dark ? "dark" : "light");
  }, [dark]);

  const links = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
    { to: "/books", label: "Books", icon: Library },
    { to: "/members", label: "Members", icon: Users },
    { to: "/transactions", label: "Transactions", icon: ArrowLeftRight }
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><BookOpen size={21} /></div>
          <div><strong>Libra</strong><span>Library Manager</span></div>
        </div>
        <nav>
          <p className="nav-label">Workspace</p>
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <Icon size={19} /> <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <NavLink to="/books/new" className="quick-add"><Plus size={18}/> Add new book</NavLink>
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}