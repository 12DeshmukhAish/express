// // app/api/equipment/route.js
// import { NextResponse } from 'next/server';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// export async function POST(req) {
//   try {
//     const token = req.headers.get('Authorization')?.split(' ')[1];
//     if (!token) {
//       return NextResponse.json({ error: 'No token provided' }, { status: 401 });
//     }

//     const equipmentData = await req.json();
//     console.log('Sending equipment data:', equipmentData);
//     console.log('API URL:', API_URL);

//     const response = await fetch(`${API_URL}/equipment`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(equipmentData),
//     });

//     console.log('Response status:', response.status);
//     console.log('Response headers:', response.headers);

//     const responseText = await response.text();
//     console.log('Raw API response:', responseText);

//     let data;
//     try {
//       data = JSON.parse(responseText);
//     } catch (parseError) {
//       console.error('Error parsing JSON response:', parseError);
//       return NextResponse.json({ 
//         error: 'Invalid JSON response from server', 
//         rawResponse: responseText 
//       }, { status: 500 });
//     }

//     if (!response.ok) {
//       console.error('Error response from server:', data);
//       return NextResponse.json({ error: data.message || 'Failed to add equipment', details: data }, { status: response.status });
//     }

//     return NextResponse.json(data, { status: 201 });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
//   }
// }



import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function POST(req) {
  try {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const equipmentData = await req.json();
    console.log('Sending equipment data:', equipmentData);

    const response = await fetch(`${API_URL}/api/equipment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(equipmentData),
    });

    console.log('Response status:', response.status);

    if (response.status === 404) {
      throw new Error("API endpoint not found.");
    }

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
      return NextResponse.json({
        error: 'Invalid JSON response from server',
        rawResponse: responseText,
      }, { status: 500 });
    }

    if (!response.ok) {
      return NextResponse.json({
        error: data.message || 'Failed to add equipment',
        details: data,
      }, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
