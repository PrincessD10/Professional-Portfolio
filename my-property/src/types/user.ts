export type VerificationStatus =
  | "not_started"
  | "pending"
  | "verified"
  | "rejected";

export type UserRole = "user" | "admin";

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;

  isSeller: boolean;
  verificationStatus: VerificationStatus;

  profileImage?: string;
  city?: string;
  quarter?: string;

  createdAt: string;
}