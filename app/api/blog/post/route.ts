import { NextRequest } from 'next/server';
import connection from '@/lib/db';
import moment from 'moment';

export async function POST(req: NextRequest): Promise<any> {
  try {
    const body = await req.json();
    const { title, author, content } = body;
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const [result] = await connection.execute(
      'INSERT INTO blog (title, author, content, created_time, updated_time) VALUES (?, ?, ?, ?, ?)',
      [title, author, content, time, time]
    );

    return new Response('', { status:200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status:500 });
  }
}