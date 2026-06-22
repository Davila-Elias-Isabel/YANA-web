export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-yana-blanco border-b border-yana-tierra z-50 shadow-sm">
      <nav className="container-yana flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <h1 className="text-xl font-bold text-yana-bosque">YANA</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-yana-gris hover:text-yana-bosque transition">
            Características
          </a>
          <a href="#how" className="text-yana-gris hover:text-yana-bosque transition">
            Cómo funciona
          </a>
          <a href="#cta" className="text-yana-gris hover:text-yana-bosque transition">
            Participa
          </a>
        </div>

        <div className="flex gap-3">
          <button className="hidden sm:block btn-yana-outline text-sm">
            Ingresar
          </button>
          <button className="btn-yana-primary text-sm">
            Usar YANA
          </button>
        </div>
      </nav>
    </header>
  )
}
