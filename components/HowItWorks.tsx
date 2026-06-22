export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Pregunta',
      description: 'Escribe lo que quieres saber sobre Oxapampa',
    },
    {
      number: '2',
      title: 'YANA Responde',
      description: 'Nuestro asistente busca la información en bases de datos oficiales',
    },
    {
      number: '3',
      title: 'Validación',
      description: 'Especialistas municipales verifican que sea correcto',
    },
    {
      number: '4',
      title: 'Tú Decides',
      description: 'Con información clara, participas en decisiones públicas',
    },
  ]

  return (
    <section id="how" className="py-20 bg-yana-blanco">
      <div className="container-yana">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Cómo Funciona YANA?
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-yana-bosque text-yana-blanco rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-yana-bosque mb-2">
                {step.title}
              </h4>
              <p className="text-yana-gris">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-3 text-yana-agua text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Visual */}
        <div className="mt-16 bg-white border-l-4 border-yana-bosque rounded-lg p-8">
          <h4 className="text-2xl font-bold text-yana-bosque mb-6">Ejemplo Real</h4>

          <div className="bg-yana-blanco rounded-lg p-6 mb-4 border-l-4 border-yana-agua">
            <p className="text-yana-gris">
              <strong>Ciudadano:</strong> "¿Cuánto presupuesto tiene educación en 2026?"
            </p>
          </div>

          <div className="bg-white border-l-4 border-yana-bosque rounded-lg p-6">
            <p className="text-yana-gris mb-3">
              <strong>🤖 YANA:</strong> "En Oxapampa, el presupuesto para educación 2026 es S/ 4.2 millones..."
            </p>
            <p className="text-sm text-yana-tierra">
              📎 Fuentes: Memoria Anual 2026, Presupuesto Participativo
            </p>
            <p className="text-sm text-yana-agua mt-2">
              ✅ Validado por: María Rojas, Especialista
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
