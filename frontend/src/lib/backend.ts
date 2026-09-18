import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { API_URL, AUTH_COOKIE } from "./auth";

type BackendResult<T> = {
  ok: boolean;
  status: number;
  data: T;
};

export async function backendRequest<T>(path: string, init?: RequestInit): Promise<BackendResult<T>> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  const data = (await response.json().catch(() => ({}))) as T;

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}

export function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

export async function setAuthCookie(token: string, remember = false) {
  const store = await cookies();
  store.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7,
  });
}

export async function clearAuthCookie() {
  const store = await cookies();
  store.delete(AUTH_COOKIE);
}

export async function authHeader(): Promise<Record<string, string>> {
  const token = (await cookies()).get(AUTH_COOKIE)?.value;
  return token ? { Authorization: `Bearer ${token}` } : {};
}
