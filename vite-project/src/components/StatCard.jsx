export default function StatCard({ label, value, note, icon: Icon, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        <span className="stat-icon"><Icon size={19}/></span>
      </div>
      <div className="stat-value">{value}</div>
      <div className={trend ? "stat-note positive" : "stat-note"}>{note}</div>
    </div>
  );
}