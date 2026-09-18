import { backendRequest, jsonResponse, setAuthCookie } from "@/lib/backend";
import type { User } from "@/lib/types";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await backendRequest<{ user: User; token?: string }>("/api/register", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!result.ok || !result.data.token) {
    return jsonResponse(result.data, result.status);
  }

  await setAuthCookie(result.data.token, false);
  return jsonResponse({ user: result.data.user }, 201);
}
