export type PropertyType =
  | "apartment"
  | "studio"
  | "house"
  | "duplex"
  | "villa"
  | "land"
  | "office"
  | "shop"
  | "warehouse";

export type ListingPurpose = "sale" | "rent";

export type PropertyStatus =
  | "pending"
  | "available"
  | "reserved"
  | "sold"
  | "rented"
  | "rejected";

export interface Property {
  id: string;

  title: string;
  description: string;

  propertyType: PropertyType;
  purpose: ListingPurpose;
  status: PropertyStatus;

  price: number;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;

  region: string;
  city: string;
  subdivision?: string;
  quarter?: string;

  images: string[];

  amenities: string[];

  sellerId: string;
  sellerName: string;

  isSellerVerified: boolean;

  createdAt: string;
  updatedAt: string;
}