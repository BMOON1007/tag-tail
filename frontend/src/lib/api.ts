import type { ApiError, PlanId, User } from "./types";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

  const data = (await response.json().catch(() => ({}))) as T & ApiError;

  if (!response.ok) {
    const error = new Error(firstError(data) || "Something went wrong. Please try again.") as Error & ApiError;
    error.errors = data.errors;
    error.message = firstError(data) || error.message;
    error.dev_reset_url = data.dev_reset_url;
    throw error;
  }

  return data;
}

export function firstError(error: ApiError): string | undefined {
  if (error.errors) {
    const first = Object.values(error.errors)[0];
    if (first?.[0]) {
      return first[0];
    }
  }

  return error.message;
}

export function login(payload: { email: string; password: string; remember?: boolean }) {
  return request<{ user: User }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function register(payload: {
  name: string;
  email: string;
  password: string;
  intended_plan: PlanId;
}) {
  return request<{ user: User }>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function logout() {
  return request<{ message: string }>("/api/auth/logout", { method: "POST" });
}

export function forgotPassword(email: string) {
  return request<{ message: string; dev_reset_url?: string | null }>("/api/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export function resetPassword(payload: { email: string; token: string; password: string }) {
  return request<{ message: string }>("/api/auth/reset-password", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
