export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-yana-bosque to-yana-agua text-white">
      <div className="container-yana text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Comienza a Usar YANA Hoy
        </h3>

        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Únete a miles de ciudadanos oxapampinos que ya están transformando
          la gobernanza local con participación, transparencia y sostenibilidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-white text-yana-bosque font-bold rounded-lg hover:bg-yana-blanco transition">
            💬 Hablar con YANA
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
            📚 Aprender más
          </button>
        </div>

        <p className="text-sm opacity-75">
          Sin requisitos. Sin complicaciones. Para todos los oxapampinos.
        </p>
      </div>
    </section>
  )
}
