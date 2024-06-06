import { NextResponse } from "next/server";

// redirects to home when we go to /revalidate
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/revalidate",
// };

// rewrites the url
// export function middleware(request) {
//   return NextResponse.rewrite(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/revalidate",
// };

export function middleware(request) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  return response;
}

export const config = {
  matcher: "/revalidate",
};
