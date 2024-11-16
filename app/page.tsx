import Link from "next/link";


export default async function Index() {
  return (
    
    <div
      className="parallax"
      style={{
        backgroundImage: 'url("/store/cocina.jpg")',
        height: '400px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad aquí
        backgroundBlendMode: 'overlay', // Aplica la opacidad sin afectar la imagen
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Contenido dentro del parallax */}
      <div className="container text-center text-white">
        <h1 className="display-3">Haz que cada día sea único</h1>
        <Link href="/categorias" passHref>
        </Link>
      </div>

    </div>


      

    
  );
}
