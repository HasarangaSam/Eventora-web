import { SignIn, SignUp, UserButton, useAuth, useUser } from "@clerk/react";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { createApiClient } from "./api/axios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in/*" element={<AuthPage mode="sign-in" />} />
      <Route path="/sign-up/*" element={<AuthPage mode="sign-up" />} />
      <Route path="/auth-test" element={<AuthTestPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function HomePage() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            Eventora
          </Link>

          <div className="flex items-center gap-4">
            {!isLoaded ? (
              <span className="text-sm text-slate-500">Loading...</span>
            ) : isSignedIn ? (
              <>
                <Link
                  to="/auth-test"
                  className="text-sm font-medium text-slate-700 hover:text-blue-700"
                >
                  Test API
                </Link>
                <UserButton />
              </>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="text-sm font-medium text-slate-700 hover:text-blue-700"
                >
                  Sign in
                </Link>
                <Link
                  to="/sign-up"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Discover · Participate · Connect
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Find your next great experience.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Discover events, explore session schedules, book tickets, and access
          your digital passes in one place.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/events"
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Explore events
          </Link>

          {!isSignedIn && (
            <Link
              to="/sign-up"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
            >
              Create an account
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

function AuthPage({ mode }: { mode: "sign-in" | "sign-up" }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 px-4 py-12">
      <Link to="/" className="text-3xl font-bold text-blue-700">
        Eventora
      </Link>

      {mode === "sign-in" ? (
        <SignIn routing="hash" />
      ) : (
        <SignUp routing="hash" />
      )}

      <Link to="/" className="text-sm text-slate-600 hover:text-blue-700">
        Back to home
      </Link>
    </main>
  );
}

function AuthTestPage() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function testBackendAuthentication() {
    setLoading(true);
    setResult("");

    try {
      const api = createApiClient(getToken);
      const response = await api.get("/auth/me");
      setResult(JSON.stringify(response.data, null, 2));
    } catch {
      setResult(
        "The API request failed. Check that the backend is running and the Clerk token is configured correctly.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!isLoaded) {
    return <p className="p-8">Loading authentication...</p>;
  }

  if (!isSignedIn) {
    return (
      <main className="p-8">
        <p>You must sign in to test backend authentication.</p>
        <Link to="/sign-in" className="text-blue-700 underline">
          Sign in
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link to="/" className="text-sm text-blue-700 hover:underline">
        ← Back to Eventora
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Authentication integration test
      </h1>

      <p className="mt-3 text-slate-600">
        Signed in as {user?.primaryEmailAddress?.emailAddress ?? user?.id}.
      </p>

      <button
        type="button"
        onClick={testBackendAuthentication}
        disabled={loading}
        className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Verifying..." : "Verify token with NestJS"}
      </button>

      {result && (
        <pre className="mt-6 overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm text-slate-100">
          {result}
        </pre>
      )}
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-blue-700 underline">
        Return home
      </Link>
    </main>
  );
}

export default App;
