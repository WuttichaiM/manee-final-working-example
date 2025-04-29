import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  // เช็กง่าย ๆ (ปกติต้องเช็กจาก Database จริง)
  if (email === 'admin@manee.com' && password === '123456') {
    const response = NextResponse.json({ message: 'Login success' });

    // Set Cookie (จำลอง JWT Token)
    response.cookies.set('token', 'fake-jwt-token-123', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    return response;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}