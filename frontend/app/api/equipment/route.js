// import { NextResponse } from 'next/server';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// export async function POST(req) {
//   try {
//     // Get the token from wherever you're storing it (e.g., cookies)
//     const token = req.cookies.get('token')?.value;
//     console.log('Token being sent:', token);

//     if (!token) {
//       console.log('No token found in cookies');
//       return NextResponse.json({ error: 'No token provided' }, { status: 401 });
//     }

//     const equipmentData = await req.json();

//     const response = await fetch(`${API_URL}/equipment`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(equipmentData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Error response from server:', errorData);
//       return NextResponse.json(errorData, { status: response.status });
//     }

//     const data = await response.json();
//     return NextResponse.json(data, { status: 201 });
//   } catch (error) {
//     console.error('Error adding equipment:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const equipmentData = await req.json();
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

    // Attempt to get the token from various sources
    let token = req.headers.get('Authorization')?.split(' ')[1]; // From Authorization header
    
    if (!token) {
      const cookieStore = cookies();
      token = cookieStore.get('auth_token')?.value; // From cookies
    }

    if (!token) {
      // If still no token, check if it's in the request body
      token = equipmentData.token;
      delete equipmentData.token; // Remove token from equipmentData if it exists
    }

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    console.log('Token being sent to backend:', token); // Log the token for debugging

    const response = await fetch(`${API_URL}/equipment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(equipmentData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from server:', errorData);
      
      if (response.status === 403) {
        // Token is invalid or expired
        // Clear the token from cookies
        const cookieStore = cookies();
        cookieStore.delete('auth_token');
        
        return NextResponse.json({ error: 'Your session has expired. Please log in again.' }, { status: 403 });
      }
      
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error adding equipment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}