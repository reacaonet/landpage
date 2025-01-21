import { Globe2, Smartphone, Code } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe2,
      title: "Desenvolvimento Web",
      description: "Sites responsivos, sistemas web e e-commerce com as melhores tecnologias do mercado.",
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Apps nativos e multiplataforma para iOS e Android que encantam seus usuários.",
      color: "orange"
    },
    {
      icon: Code,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de software sob medida para otimizar seus processos empresariais.",
      color: "blue"
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossos Serviços</h2>
          <p className="mt-4 text-xl text-gray-600">Soluções completas para sua presença digital</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
              style={{
                borderColor: service.color === 'blue' ? '#2563eb' : '#f97316',
                borderWidth: '1px'
              }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                service.color === 'blue' ? 'bg-blue-100' : 'bg-orange-100'
              }`}>
                <service.icon className={service.color === 'blue' ? 'text-blue-600' : 'text-orange-500'} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}