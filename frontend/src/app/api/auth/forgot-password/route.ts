import { backendRequest, jsonResponse } from "@/lib/backend";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await backendRequest("/api/forgot-password", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return jsonResponse(result.data, result.status);
}
