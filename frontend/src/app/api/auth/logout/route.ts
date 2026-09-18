import { authHeader, backendRequest, clearAuthCookie, jsonResponse } from "@/lib/backend";

export async function POST() {
  await backendRequest("/api/logout", {
    method: "POST",
    headers: await authHeader(),
  });

  await clearAuthCookie();
  return jsonResponse({ message: "You have been logged out." });
}
