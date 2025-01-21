import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-blue-600 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.6',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transformando Ideias em{' '}
            <span className="bg-gradient-to-r from-white to-orange-300 text-transparent bg-clip-text">
              Realidade Digital
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Desenvolvemos soluções tecnológicas personalizadas para impulsionar seu negócio no mundo digital.
          </p>
          <div className="space-x-4">
            <a
              href="#contato"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Fale Conosco <ChevronRight className="ml-2" size={20} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}