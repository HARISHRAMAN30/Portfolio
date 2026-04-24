export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--heading)' }}>404</h1>
      <p style={{ marginTop: '1rem', color: 'var(--text2)', fontFamily: 'var(--body)' }}>Could not find requested resource</p>
      <a href="/" style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', backgroundColor: 'var(--accent1)', color: 'white', borderRadius: '14px', textDecoration: 'none' }}>
        Return Home
      </a>
    </div>
  );
}
