export async function GET() {
  const backendUrl = process.env.BACKEND_URL ?? 'http://127.0.0.1:8000';

  try {
    const upstream = await fetch(backendUrl, {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    });
    if (!upstream.ok) throw new Error(`HTTP ${upstream.status}`);

    const { message } = await upstream.json();
    if (typeof message !== 'string') throw new Error('Brak komunikatu z API');

    return Response.json({ message });
  } catch (error) {
    console.error('Błąd połączenia z API:', error.message);
    return Response.json(
      { error: 'Nie udało się pobrać komunikatu z API.' },
      { status: 502 },
    );
  }
}
