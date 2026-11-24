'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Pobieranie komunikatu…');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMessage() {
      try {
        const response = await fetch('/api/message', { signal: controller.signal });
        const data = await response.json();
        setMessage(response.ok ? data.message : data.error);
      } catch {
        if (!controller.signal.aborted) {
          setMessage('Nie udało się pobrać komunikatu.');
        }
      }
    }

    loadMessage();
    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1>Komunikat z FastAPI</h1>
      <p role="status">{message}</p>
    </main>
  );
}
