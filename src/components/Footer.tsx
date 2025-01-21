export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
              reacaonet
            </h3>
            <p className="text-gray-400">
              Transformando ideias em realidade digital com soluções tecnológicas inovadoras.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-blue-500">Início</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-orange-500">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-blue-500">Sobre</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-orange-500">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>suporte@reacaonet.com.br</li>
              <li>(87) 9 9809-2910</li>
              <li>Recife, PE</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Reacaonet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}