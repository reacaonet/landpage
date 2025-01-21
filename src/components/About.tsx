export function About() {
  return (
    <section id="sobre" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Equipe Reacaonet"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a Reacaonet</h2>
            <p className="text-gray-600 mb-6">
              Somos uma empresa especializada em desenvolvimento de software, focada em criar soluções tecnológicas 
              inovadoras que impulsionam o sucesso dos nossos clientes.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa equipe de profissionais altamente qualificados trabalha com as mais recentes tecnologias 
              para entregar produtos de alta qualidade que atendem às necessidades específicas de cada projeto.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">5+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Anos de Experiência</h4>
                  <p className="text-gray-600">No mercado de tecnologia</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-500 font-semibold">50+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Projetos Entregues</h4>
                  <p className="text-gray-600">Com satisfação garantida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}