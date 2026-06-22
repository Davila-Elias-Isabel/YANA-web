export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Presupuesto Transparente',
      description: 'Entiende en dónde gasta Oxapampa. Preguntas simples, respuestas claras.',
    },
    {
      icon: '🏗️',
      title: 'Obras en Vivo',
      description: 'Sigue el estado de proyectos públicos en tiempo real. ¿Dónde está esa obra?',
    },
    {
      icon: '🗳️',
      title: 'Participa en Decisiones',
      description: 'Vota en presupuesto participativo. Tu voto cuenta para el futuro de Oxapampa.',
    },
    {
      icon: '🌿',
      title: 'Sostenibilidad',
      description: 'Conoce las iniciativas ambientales. Oxapampa primero, siempre.',
    },
    {
      icon: '✅',
      title: 'Validado por Expertos',
      description: 'Cada respuesta es revisada por especialistas municipales. Confianza real.',
    },
    {
      icon: '🤝',
      title: 'Comunidad Activa',
      description: 'Conecta con otros ciudadanos. Juntos somos más fuertes.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-yana">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Características de YANA
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-yana hover:border-yana-agua transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-yana-bosque mb-3">
                {feature.title}
              </h4>
              <p className="text-yana-gris leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
