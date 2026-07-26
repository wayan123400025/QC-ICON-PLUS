import { PrismaClient } from "@prisma/client";

// Mencegah Next.js hot-reload di development membuat koneksi Prisma baru
// berkali-kali (best practice resmi dari dokumentasi Prisma + Next.js).
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
