export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-yana-blanco to-white">
      <div className="container-yana">
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
          <div className="mb-6 flex justify-center">
            <span className="text-6xl">🌿</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tu voz importa</span> en Oxapampa
          </h2>

          <p className="text-xl text-yana-gris mb-8 leading-relaxed">
            YANA es tu asistente de transparencia ciudadana. Pregúntale sobre presupuesto,
            obras públicas y decisiones que afectan tu comunidad.
            <span className="font-semibold text-yana-bosque"> Respuestas claras, verificadas y para todos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-yana-primary">
              💬 Hablar con YANA
            </button>
            <button className="btn-yana-outline">
              Aprender más
            </button>
          </div>

          <div className="bg-yana-agua/10 border border-yana-agua/20 rounded-lg p-6">
            <p className="text-yana-agua font-semibold">
              ✅ Validado por especialistas  •  📎 Fuentes verificadas  •  👥 Para toda la comunidad
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
          {[
            { number: '3,500+', label: 'Ciudadanos participando' },
            { number: '100%', label: 'Respuestas validadas' },
            { number: '2026', label: 'Año de transparencia' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-yana-bosque">
                {stat.number}
              </div>
              <p className="text-sm text-yana-gris mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
