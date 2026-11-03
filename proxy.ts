import { NextResponse, type NextRequest } from "next/server";

/**
 * Language routing:
 *  - English (main) is served at clean URLs:  /services  →  app/[lang=en]/services
 *  - Spanish lives under /es:                  /es/services
 *  - /en/... is redirected to the clean URL so each page has one English address.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, image optimizer and any file with an extension (images, icon.svg, etc.)
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
