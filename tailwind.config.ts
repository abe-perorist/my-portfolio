import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー：白ベース
        background: "var(--background)",
        foreground: "var(--foreground)",
        // アクセントカラー：ビビッドな青と緑
        accent: {
          blue: "#00D4FF", // ネオンターコイズ
          green: "#00FF88", // ビビッドグリーン
          orange: "#FF6B35", // エネルギッシュなオレンジ
        },
        // グレーのバリエーション
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        // 丸めのサンセリフフォント
        sans: ["Inter", "Hiragino Sans", "Yu Gothic UI", "Meiryo", "system-ui", "sans-serif"],
        rounded: ["Nunito", "Rounded Mplus 1c", "Hiragino Sans", "Yu Gothic UI", "sans-serif"],
      },
      animation: {
        // 遊び心のあるアニメーション
        "bounce-gentle": "bounce-gentle 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "scale-pulse": "scale-pulse 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
      keyframes: {
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      boxShadow: {
        "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "fun": "0 10px 25px -3px rgba(0, 212, 255, 0.3), 0 4px 6px -2px rgba(0, 212, 255, 0.05)",
        "fun-green": "0 10px 25px -3px rgba(0, 255, 136, 0.3), 0 4px 6px -2px rgba(0, 255, 136, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
