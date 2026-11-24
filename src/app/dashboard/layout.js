import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Dashboard Menu</h3>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/stats">Task Stats</Link>
      </aside>

      <section className="dashboard-content">
        {children}
      </section>
    </div>
  );
}