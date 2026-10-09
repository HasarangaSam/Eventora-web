import { Link } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-blue-700"
          >
            Eventora
          </Link>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Events made simple
          </span>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Discover · Participate · Connect
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Find your next
            <span className="block text-blue-700">great experience.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover events, explore session schedules, book your tickets, and
            keep your digital passes in one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/events"
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Explore events
            </Link>

            <a
              href="#about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              About Eventora
            </a>
          </div>
        </div>

        <div id="about" className="mt-20 grid gap-5 sm:grid-cols-3">
          <Feature
            title="Discover events"
            description="Find published events and explore their schedules."
          />

          <Feature
            title="Simple ticketing"
            description="Choose ticket categories and complete a simulated checkout."
          />

          <Feature
            title="Digital tickets"
            description="Access your tickets and present QR codes at check-in."
          />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-6 text-center text-sm text-slate-500">
        Eventora · Full-Stack Event Management Platform
      </footer>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default App;
