import './globals.css';

export const metadata = { title: 'Komunikat z FastAPI' };

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
