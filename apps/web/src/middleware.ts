import { NextResponse } from 'next/server';

import { PROTECTED_URL, PROTECTED_URL_LOGIN } from './constants/protected_URL';
// import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  // const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const session = req.cookies.get('next-auth.session-token');
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  url.pathname = '/login';

  // matcher에 명시된 모든 경로에 대해 로그인 여부 확인
  if (PROTECTED_URL.includes(pathname) && !session) {
    return NextResponse.redirect(url);
  }

  // 로그인된 유저는 로그인, 회원가입 페이지에 접근 X
  if (
    PROTECTED_URL_LOGIN.some((protectedPath) =>
      pathname.startsWith(protectedPath)
    ) &&
    session
  ) {
    return NextResponse.redirect(new URL('/map', req.url));
  }

  return NextResponse.next();
}
