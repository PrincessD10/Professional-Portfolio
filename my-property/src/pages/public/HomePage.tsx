import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import PropertyCard from "../../components/property/PropertyCard";
import { properties } from "../../data/properties";

const popularLocations = [
  {
    city: "Douala",
    description: "Littoral Region",
    count: "120+ properties",
  },
  {
    city: "Yaoundé",
    description: "Centre Region",
    count: "95+ properties",
  },
  {
    city: "Buea",
    description: "Southwest Region",
    count: "60+ properties",
  },
  {
    city: "Limbe",
    description: "Southwest Region",
    count: "40+ properties",
  },
];

const propertyTypes = [
  {
    name: "Apartments",
    icon: Building2,
  },
  {
    name: "Houses",
    icon: Home,
  },
  {
    name: "Land",
    icon: MapPin,
  },
  {
    name: "Commercial",
    icon: Building2,
  },
];

export default function HomePage() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const featuredProperties = properties.slice(0, 4);

  function toggleFavorite(propertyId: string) {
    setFavorites((current) =>
      current.includes(propertyId)
        ? current.filter((id) => id !== propertyId)
        : [...current, propertyId],
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <ShieldCheck size={16} className="text-emerald-400" />
              Trusted property listings across Cameroon
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find a place you can{" "}
              <span className="text-blue-400">call home.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Discover houses, apartments, land and commercial properties
              across Cameroon—all in one place.
            </p>
          </div>

          {/* Search */}
          <div
            className={`mt-10 max-w-5xl rounded-2xl bg-white p-3 shadow-2xl transition ${
              isSearchFocused ? "ring-4 ring-blue-500/20" : ""
            }`}
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                <MapPin size={20} className="shrink-0 text-blue-600" />

                <div className="min-w-0">
                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold text-slate-500"
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    placeholder="City or quarter"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                <Home size={20} className="shrink-0 text-blue-600" />

                <div className="min-w-0">
                  <label
                    htmlFor="property-type"
                    className="block text-xs font-semibold text-slate-500"
                  >
                    Property type
                  </label>

                  <select
                    id="property-type"
                    className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-900 outline-none"
                  >
                    <option value="">Any property</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="duplex">Duplex</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                <span className="text-lg font-semibold text-blue-600">
                  FCFA
                </span>

                <div className="min-w-0">
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold text-slate-500"
                  >
                    Budget
                  </label>

                  <select
                    id="budget"
                    className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-900 outline-none"
                  >
                    <option value="">Any budget</option>
                    <option value="under-50m">Under 50M</option>
                    <option value="50m-100m">50M - 100M</option>
                    <option value="100m-200m">100M - 200M</option>
                    <option value="over-200m">Over 200M</option>
                  </select>
                </div>
              </div>

              <Link
                to="/properties"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Search size={19} />
                Search
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <span>Popular:</span>
            <Link to="/properties?city=Douala" className="hover:text-white">
              Douala
            </Link>
            <Link to="/properties?city=Yaoundé" className="hover:text-white">
              Yaoundé
            </Link>
            <Link to="/properties?city=Buea" className="hover:text-white">
              Buea
            </Link>
            <Link to="/properties?city=Limbe" className="hover:text-white">
              Limbe
            </Link>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Explore properties
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Find what you're looking for
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Whether you're looking to buy, rent or invest, explore different
              types of properties across Cameroon.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {propertyTypes.map((type) => {
              const Icon = type.icon;

              return (
                <Link
                  key={type.name}
                  to="/properties"
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-900">
                    {type.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Explore listings
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Featured listings
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Properties worth seeing
              </h2>

              <p className="mt-3 max-w-2xl text-slate-500">
                Explore some of the latest properties available from sellers
                across Cameroon.
              </p>
            </div>

            <Link
              to="/properties"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all properties
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onFavoriteToggle={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular locations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Popular locations
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Explore Cameroon
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularLocations.map((location) => (
              <Link
                key={location.city}
                to={`/properties?city=${encodeURIComponent(location.city)}`}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <MapPin className="text-blue-600" size={22} />

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {location.city}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {location.description}
                </p>

                <p className="mt-4 text-sm font-medium text-blue-600">
                  {location.count}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <ShieldCheck size={25} />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-400">
                Built around trust
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Know who you're dealing with.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                My Property uses seller verification, listing moderation and
                user reporting to create a safer environment for people
                searching for property in Cameroon.
              </p>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Create your account
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 className="text-emerald-400" size={24} />

                <h3 className="mt-5 font-semibold text-white">
                  Verified sellers
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Seller identity is reviewed by the My Property
                  administration team.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <ShieldCheck className="text-blue-400" size={24} />

                <h3 className="mt-5 font-semibold text-white">
                  Listing moderation
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  New listings can be reviewed before being published.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Users className="text-purple-400" size={24} />

                <h3 className="mt-5 font-semibold text-white">
                  Community reporting
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Users can report suspicious or inaccurate listings.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Home className="text-amber-400" size={24} />

                <h3 className="mt-5 font-semibold text-white">
                  Local focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Designed around the way people search for property in
                  Cameroon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a property to list?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Create an account and start your journey as a property seller on
            My Property.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Get started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}