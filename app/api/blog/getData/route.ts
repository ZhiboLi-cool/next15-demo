import { NextRequest } from 'next/server';
import connection from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await connection.execute('SELECT * FROM blog');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status:500 });
  }
}