import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Bienvenido a la aplicación</h1>
      <p>Por favor, selecciona una opción:</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/register">
          <a style={{ margin: '0 10px', textDecoration: 'none', color: 'blue' }}>Registro</a>
        </Link>
        <Link href="/login">
          <a style={{ margin: '0 10px', textDecoration: 'none', color: 'blue' }}>Iniciar Sesión</a>
        </Link>
      </div>
    </div>
  );
}
