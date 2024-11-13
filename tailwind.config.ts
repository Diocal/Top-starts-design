import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"], // Habilita el modo oscuro con clases
  content: [
    './pages/**/*.{ts,tsx}', // Escanea archivos en la carpeta pages
    './components/**/*.{ts,tsx}', // Escanea archivos en la carpeta components
    './app/**/*.{ts,tsx}', // Escanea archivos en la carpeta app
    './src/**/*.{ts,tsx}', // Escanea archivos en la carpeta src
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // Centra automáticamente los contenedores
      padding: "2rem", // Padding estándar para el contenedor
      screens: {
        "2xl": "1400px", // Ancho máximo para pantallas grandes
      },
    },
    extend: {
      // Fuentes personalizadas
      fontFamily: {
        workSans: ['"Work Sans"', 'sans-serif'], // Agrega Work Sans
      },
      // Colores personalizados
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores personalizados para gráficos
        chartGreen: {
          light: "#3DFF99", // Verde claro
          DEFAULT: "#00FF00", // Verde principal
          dark: "#008F39", // Verde oscuro
        },
        chartRed: {
          light: "#FF7A7A", // Rojo claro
          DEFAULT: "#FF0000", // Rojo principal
          dark: "#8B0000", // Rojo oscuro
        },
        // Otros colores personalizados
        lightGold: "hsl(var(--tab-bg-active))", // Color dorado claro
        tabBgDefault: "hsl(var(--tab-bg-default))",
        tabTextDefault: "hsl(var(--tab-text-default))",
        tabBgActive: "hsl(var(--tab-bg-active))",
        tabTextActive: "hsl(var(--tab-text-active))",
        subtleLight: "hsl(var(--subtle-light))", // Color claro para fondos
      },
      // Sombras personalizadas
      boxShadow: {
        subtle: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra ligera
        intense: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra más intensa
      },
      // Degradados personalizados
      backgroundImage: {
        'chart-green-gradient': 'linear-gradient(180deg, rgba(0, 255, 0, 0.6) 0%, rgba(0, 255, 0, 0) 100%)',
        'chart-red-gradient': 'linear-gradient(180deg, rgba(255, 0, 0, 0.6) 0%, rgba(255, 0, 0, 0) 100%)',
      },
      // Bordes redondeados
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 5px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Animaciones personalizadas
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Plugin para animaciones
} satisfies Config;

export default config;
