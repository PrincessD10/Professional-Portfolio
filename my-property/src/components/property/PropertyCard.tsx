import { Link } from "react-router-dom";
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Maximize,
  ShieldCheck,
} from "lucide-react";
import type { Property } from "../../types/property";

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onFavoriteToggle?: (propertyId: string) => void;
}

function formatPrice(price: number, purpose: Property["purpose"]) {
  const formatted = new Intl.NumberFormat("en-CM").format(price);

  return purpose === "rent"
    ? `${formatted} FCFA/month`
    : `${formatted} FCFA`;
}

export default function PropertyCard({
  property,
  isFavorite = false,
  onFavoriteToggle,
}: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Purpose */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
            {property.purpose === "sale" ? "For Sale" : "For Rent"}
          </span>
        </div>

        {/* Favorite */}
        <button
          type="button"
          onClick={() => onFavoriteToggle?.(property.id)}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm transition hover:bg-white hover:text-red-500"
        >
          <Heart
            size={18}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>

        {/* Status */}
        {property.status !== "available" && (
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
              {property.status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="mb-2 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} />
          <span>
            {property.quarter}, {property.city}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/properties/${property.id}`}
          className="block"
        >
          <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 transition hover:text-blue-600">
            {property.title}
          </h3>
        </Link>

        {/* Price */}
        <p className="mt-3 text-xl font-bold text-blue-600">
          {formatPrice(property.price, property.purpose)}
        </p>

        {/* Property details */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
          {property.bedrooms !== undefined && (
            <div className="flex items-center gap-1.5">
              <BedDouble size={17} />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}

          {property.bathrooms !== undefined && (
            <div className="flex items-center gap-1.5">
              <Bath size={17} />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}

          {property.area !== undefined && (
            <div className="flex items-center gap-1.5">
              <Maximize size={16} />
              <span>{property.area} m²</span>
            </div>
          )}
        </div>

        {/* Seller */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            By {property.sellerName}
          </span>

          {property.isSellerVerified && (
            <span
              className="flex items-center gap-1 text-xs font-semibold text-emerald-600"
              title="Identity verified by My Property"
            >
              <ShieldCheck size={15} />
              Verified
            </span>
          )}
        </div>
      </div>
    </article>
  );
}