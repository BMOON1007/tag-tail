import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { extraPagesEnabled } from "@/lib/site";

export function proxy(request: NextRequest) {
  if (extraPagesEnabled) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|dog.jpg).*)"],
};
