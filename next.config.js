/**
 * Carga las variables de entorno si es necesario
 */
await import("./src/env.js");

// Configuración base de Next.js
/** @type {import('next').NextConfig} */
const coreConfig = {
  reactStrictMode: false, // Cambia a `true` si quieres habilitar el modo estricto
  swcMinify: true, // Usa el minificador SWC
  typescript: {
    ignoreBuildErrors: true, // Ignorar errores de TypeScript durante la construcción
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignorar errores de ESLint durante la construcción
  },
};

// Importar los plugins necesarios
import withPWA from "@ducanh2912/next-pwa"; // Plugin para PWA
import { withSentryConfig } from "@sentry/nextjs"; // Plugin para Sentry

// Configuración de Sentry
const sentryConfig = withSentryConfig(coreConfig, {
  org: "bridge23-data", // Tu organización en Sentry
  project: "bridge23-data", // Tu proyecto en Sentry

  // Opciones avanzadas de Sentry
  silent: !process.env.CI, // Solo imprime logs en CI
  widenClientFileUpload: true, // Subir un conjunto más amplio de mapas de origen
  reactComponentAnnotation: { enabled: true }, // Anotar componentes de React para rastreo
  hideSourceMaps: true, // Ocultar mapas de origen en el cliente
  disableLogger: true, // Reducir el tamaño del bundle al eliminar el logger de Sentry
  automaticVercelMonitors: true, // Habilitar monitores automáticos en Vercel
});

// Configuración de PWA
const pwaConfig = withPWA({
  dest: "public", // Generar archivos en la carpeta `public`
  register: true, // Registrar el Service Worker automáticamente
  workboxOptions: {
    skipWaiting: true, // Hacer que el Service Worker se active inmediatamente
  },
})(sentryConfig); // Aplicar la configuración de Sentry

// Exportar la configuración final
export default pwaConfig;
