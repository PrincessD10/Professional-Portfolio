import { Link } from "react-router-dom";
import { Menu, User, Heart, House } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="My Property home"
    >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
            <House size={21} strokeWidth={2.2} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            My Property
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/properties"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Properties
          </Link>

          <a
            href="#about"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/dashboard"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
            aria-label="Favorites"
          >
            <Heart size={20} />
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            <User size={18} />
            Sign in
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}