# 🌿 YANA - Transparencia Ciudadana Oxapampa

**Tu voz en Oxapampa.** Asistente de IA para gobernanza participativa, transparente y sostenible.

[![Vercel Deployed](https://img.shields.io/badge/Vercel-Deployed-success?logo=vercel)](https://yana-oxapampa.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![License MIT](https://img.shields.io/badge/License-MIT-green)]

---

## 📋 Características

- 🤖 **ChatIA** — Asistente de transparencia con validación humana
- 📊 **Presupuesto Transparente** — Entiende el gasto público en Oxapampa
- 🏗️ **Obras en Vivo** — Sigue el estado de proyectos públicos
- 🗳️ **Votación Participativa** — Participa en decisiones públicas
- 🌿 **Sostenibilidad** — Iniciativas ambientales de Oxapampa
- ✅ **Validado** — Todas las respuestas revisadas por especialistas
- 🎯 **Alineado con ENIA 2026-2030** — Normativa nacional de IA

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/yana-web.git
cd yana-web

# Instalar dependencias
npm install

# Crear .env.local
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 Estructura del Proyecto

```
yana-web/
├── app/
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Layout global
│   ├── globals.css        # Estilos globales
│   └── api/              # API routes (próximamente)
├── components/
│   ├── Header.tsx        # Navegación
│   ├── Hero.tsx          # Sección principal
│   ├── Features.tsx      # Características
│   ├── HowItWorks.tsx   # Cómo funciona
│   ├── CTA.tsx          # Llamada a acción
│   └── Footer.tsx       # Footer
├── public/               # Assets estáticos
├── .env.example         # Variables de entorno
├── tailwind.config.ts   # Config Tailwind (colores YANA)
├── next.config.ts       # Config Next.js
└── tsconfig.json        # Config TypeScript
```

---

## 🎨 Marca YANA

### Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Verde Bosque | `#2D5016` | Primario, natural |
| Verde Agua | `#4CAF50` | Activos, éxito |
| Tierra Oxapampa | `#8B6F47` | Territorio |
| Blanco Naturalista | `#F5F5F0` | Fondos |
| Gris Bosque | `#3D3D3D` | Textos |

### Tipografía

- **Headings:** Poppins Bold
- **Body:** Inter Regular
- **Mono:** JetBrains Mono

---

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build producción
npm start        # Ejecutar build
npm run lint     # Validar código
```

---

## 📦 Deploy en Vercel

### 1. Conectar GitHub

```bash
git remote add origin https://github.com/tu-usuario/yana-web.git
git push -u origin main
```

### 2. Importar en Vercel

1. Ir a [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Seleccionar repositorio `yana-web`
4. Vercel detectará Next.js automáticamente
5. Click en "Deploy"

### 3. Variables de Entorno en Vercel

En Settings → Environment Variables, agregar:

```
NEXT_PUBLIC_API_URL=https://yana-oxapampa.vercel.app/api
NEXT_PUBLIC_OPENAI_API_KEY=sk-xxx
DATABASE_URL=postgresql://...
```

---

## 🔗 Integración ChatIA (Próxima Fase)

Cuando esté lista la API de ChatIA:

```typescript
// app/api/chat/route.ts
import { OpenAI } from 'openai'

export async function POST(req: Request) {
  const { message } = await req.json()
  
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  })
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [
      {
        role: 'system',
        content: `Eres YANA, asistente de transparencia de Oxapampa...`,
      },
      { role: 'user', content: message },
    ],
  })
  
  return Response.json({ response: response.choices[0].message })
}
```

---

## 🌍 Gobernanza & Compliance

### ENIA 2026-2030
- ✅ Ley N.° 31814 (IA ética)
- ✅ DS 115-2025-PCM (supervisión humana)
- ✅ NTP-ISO/IEC 42001:2025 (gobernanza IA)

### Seguridad
- Encriptación HTTPS
- Variables sensibles en Vercel Secrets
- Rate limiting en API

---

## 📚 Documentación Completa

Ver en `/Downloads`:
- `YANA_Identidad_Marca_Bot.md` — Guía de marca
- `ESPECIFICACIONES_ChatIA_Transparencia.md` — Tech specs
- `ADICIONES_ENIA_a_CiudadanIA_Activa.md` — Normativa

---

## 🤝 Contribuir

¿Quieres mejorar YANA? ¡Bienvenido!

```bash
# Fork el repositorio
# Crea rama: git checkout -b feature/tu-feature
# Commit: git commit -m 'Add feature'
# Push: git push origin feature/tu-feature
# Abre Pull Request
```

---

## 📞 Soporte

- 💬 **Chat:** Usa YANA directamente
- 📧 **Email:** hola@yana-oxapampa.pe
- 🐛 **Issues:** GitHub Issues

---

## 📄 Licencia

MIT License © 2026 YANA Oxapampa

---

**YANA: Tu voz, Oxapampa.**
