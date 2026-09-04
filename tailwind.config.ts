import type {Config} from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        brand: ["var(--font-brand)", "cursive"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(56, 189, 248, 0.18)",
        glass:
          "0 18px 40px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px)",
        spotlight:
          "radial-gradient(circle at top, rgba(34,211,238,0.22), transparent 40%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.18), transparent 26%), radial-gradient(circle at 20% 80%, rgba(99,102,241,0.14), transparent 30%)"
      },
      keyframes: {
        float: {
          "0%, 100%": {transform: "translateY(0px)"},
          "50%": {transform: "translateY(-12px)"}
        },
        pulseGlow: {
          "0%, 100%": {opacity: "0.55", transform: "scale(1)"},
          "50%": {opacity: "0.9", transform: "scale(1.04)"}
        },
        shimmer: {
          "0%": {backgroundPosition: "-200% 0"},
          "100%": {backgroundPosition: "200% 0"}
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
