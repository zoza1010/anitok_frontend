import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '4rem 1rem', textAlign: 'center'}}>
      <h1>404 — Страница не найдена</h1>
      <p style={{ padding: '0 0 2rem 0' }}>Извините, такой страницы не существует.</p>
      <Link
        href="/"
        style={{
          color: '#7aa6c2', // мягкий голубой
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Вернуться на главную
      </Link>
    </main>
  );
}
