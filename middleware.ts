import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  //For creator path
  const cookie = cookies().get("jwt");

  if (request.nextUrl.pathname.startsWith("/profile/")) {

    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const secret = new TextEncoder().encode(
      process.env.NEXT_PUBLIC_JWT_API_KEY
    );
    const jwt = cookie.value;

    try {
      const { payload } = await jose.jwtVerify(jwt, secret, {});
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/profile/[id]/[create]")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const secret = new TextEncoder().encode(
      process.env.NEXT_PUBLIC_JWT_API_KEY
    );
    const jwt = cookie.value;

    try {
      const { payload } = await jose.jwtVerify(jwt, secret, {});
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  //For login path
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (!cookie) {
      return;
    }
    const secret = new TextEncoder().encode(
      process.env.NEXT_PUBLIC_JWT_API_KEY
    );

    const jwt = cookie?.value;

    try {
      const { payload } = await jose.jwtVerify(jwt, secret, {});
      return NextResponse.redirect(
        new URL(`/profile/${payload.sub}`, request.url)
      );
    } catch (err) {
      return;
    }
  }
}

export const config = {
  matcher: ["/profile/:path*", "/profile/[id]/[create]", "/login"]
};
