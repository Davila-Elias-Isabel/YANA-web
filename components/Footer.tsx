export default function Footer() {
  return (
    <footer className="bg-yana-gris text-yana-blanco">
      <div className="container-yana py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <h4 className="text-lg font-bold">YANA</h4>
            </div>
            <p className="text-sm opacity-75">
              Tu voz en Oxapampa. Transparencia ciudadana, participativa y sostenible.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-4">Producto</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:text-yana-agua transition">Características</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Cómo funciona</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Precios</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Comunidad</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:text-yana-agua transition">Ciudadanos</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Municipalidad</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Participar</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:text-yana-agua transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Términos</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Datos abiertos</a></li>
              <li><a href="#" className="hover:text-yana-agua transition">Sostenibilidad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yana-agua/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>© 2026 YANA - Oxapampa. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yana-agua transition">Twitter</a>
              <a href="#" className="hover:text-yana-agua transition">Facebook</a>
              <a href="#" className="hover:text-yana-agua transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yana-bosque/20 rounded-lg text-center text-sm">
          <p>
            <strong>YANA</strong> está alineado con ENIA 2026-2030 |
            <a href="#" className="text-yana-agua hover:underline"> Gobernanza de IA ética</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
