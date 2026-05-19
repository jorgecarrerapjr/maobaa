export default function Home() {
  return (
    <div style={{
      background: '#0f0825',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#f0e0ff'
    }}>
      <div style={{ fontSize: 48, marginBottom: 8 }}>♠ ♥ ♦ ♣</div>
      <h1 style={{ fontSize: 64, color: '#FFD700', letterSpacing: 4, marginBottom: 8 }}>
        Mão Boa
      </h1>
      <p style={{ fontSize: 18, color: '#9b59f5', letterSpacing: 4, marginBottom: 4 }}>
        BURACO FECHADO
      </p>
      <p style={{ fontSize: 14, color: '#6a5a8a', marginBottom: 48, fontStyle: 'italic' }}>
        "Sua vez. Sua mão. Sua vitória."
      </p>
      <a href="#" style={{
        background: '#FFD700',
        color: '#1a0a2e',
        padding: '16px 48px',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: 'bold',
        textDecoration: 'none',
        letterSpacing: 1
      }}>
        Em breve 🃏
      </a>
    </div>
  )
}
