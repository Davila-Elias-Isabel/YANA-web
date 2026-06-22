import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YANA - Transparencia Ciudadana Oxapampa',
  description: 'Tu voz en Oxapampa. Asistente de transparencia ciudadana y gobernanza participativa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-yana-blanco text-yana-gris font-inter">
        {children}
      </body>
    </html>
  )
}
