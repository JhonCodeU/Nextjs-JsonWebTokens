import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware (request) {

  const jwtCookie = request.cookies.get('myTokenName');
  console.log(jwtCookie);


  if (jwtCookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  try {
    const { payload } = await jwtVerify(jwtCookie.value, new TextEncoder().encode('secret'));
    console.log(payload);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: ['/dashboard', '/', '/admin/:path*']
}