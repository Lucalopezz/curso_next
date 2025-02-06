import Link from "next/link";

const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
        <p className="text-lg mb-6">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voltar para Home
        </Link>
      </div>
    );
  };
  
  export default NotFound;
  