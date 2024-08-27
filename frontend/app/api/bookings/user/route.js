export async function GET(req) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    console.log('API_URL:', API_URL);
  
    try {
      // Extract the token from the Authorization header
      const token = req.headers.get('Authorization')?.split(' ')[1];
  
      if (!token) {
        return new Response(JSON.stringify({ error: 'No token provided' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const response = await fetch(`${API_URL}/api/bookings/user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error('Fetching bookings failed:', data);
        return new Response(JSON.stringify({ error: data.message || 'Failed to fetch bookings' }), {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      console.log('Bookings fetched successfully:', data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }