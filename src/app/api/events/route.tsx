import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzE3NzIxMjY2LCJqdGkiOiI1ZGE1MTk2YS1jMjI0LTRmODgtYmNjMy1mMGNiYzljMWZhZjUiLCJ1c2VyX3V1aWQiOiJjMmZkMWVjNi00NTcyLTRiNmQtOWUwYi02YTcyOGQzNzZjODkifQ.IHJrCn7-HHebFWP_fyFeOSVyGixR4xbqsamI38puxiZJ414qTpbncgp3491-8twH-LTcqFf8eQsJRiUbLbo76A'; // Store your API key in an environment variable for security
  const apiUrl = 'https://api.calendly.com/scheduled_events';

  try {
    const response = await axios.get(apiUrl, {
      params: {user: 'https://api.calendly.com/users/c2fd1ec6-4572-4b6d-9e0b-6a728d376c89'},
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      }
    });

    return NextResponse.json(response.data);
  } catch (error : any) {
    console.error(error.message);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}