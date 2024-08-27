export async function POST(req) {
  const userData = await req.json();
  console.log('Received registration data:', userData);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  try {
    const response = await fetch(`${API_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Registration failed:', data);
      throw new Error(data.message || 'Registration failed');
    }

    console.log('Registration successful:', data);
    return new Response(JSON.stringify(data), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error during registration:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}