import { cookies } from "next/headers";
import type { User } from "./types";

export const AUTH_COOKIE = "tag_tails_token";
export const API_URL = process.env.API_URL || "http://127.0.0.1:8000";

export async function getCurrentUser(): Promise<User | null> {
  const token = (await cookies()).get(AUTH_COOKIE)?.value;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/api/user`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as User;
  } catch {
    return null;
  }
}
