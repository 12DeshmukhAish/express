// export async function POST(req) {
//     const loginData = await req.json();
//     console.log('Received login data:', loginData);
  
//     const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
//     console.log('API_URL:', API_URL);
  
//     try {
//       const response = await fetch(`${API_URL}/api/users/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         console.error('Login failed:', data);
//         return new Response(JSON.stringify({ error: data.message || 'Login failed' }), {
//           status: response.status,
//           headers: { 'Content-Type': 'application/json' },
//         });
//       }
  
//       console.log('Login successful:', data);
//       return new Response(JSON.stringify(data), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     } catch (error) {
//       console.error('Error during login:', error);
//       return new Response(JSON.stringify({ error: error.message }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
//   }
  import { NextResponse } from 'next/server';

export async function POST(req) {
  const loginData = await req.json();
  console.log('Received login data:', loginData);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  console.log('API_URL:', API_URL);

  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Login failed:', data);
      return NextResponse.json({ error: data.message || 'Login failed' }, { status: response.status });
    }

    console.log('Login successful:', data);

    // Create a new response
    const newResponse = NextResponse.json(data, { status: 200 });

    // Set the token in a secure HTTP-only cookie
    newResponse.cookies.set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      // maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    return newResponse;
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}