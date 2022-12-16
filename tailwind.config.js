const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: "jit",
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: "media", // or "media" or "class"
    theme: {
        colors: {
            transparent: "transparent",
            black: {
                DEFAULT: "#0D1011",
                lighter: "#333333",
            },
            white: {
                DEFAULT: "#FFFFFF",
            },
            yellow: {
                DEFAULT: "#ffcb30"
            },
        },
        fontSize: {
            "2xs": ["0.5625rem", "1.7em"],
            "1xs": ["0.6875rem", "1.7em"],
            "xs": ["0.8125rem", "1.6em"],
            "sm": ["0.9375rem", "1.6em"],
            "base": ["1rem", "1.5em"],
            "lg": ["1.0625rem", "1.5em"],
            "xl": ["1.125rem", "1.5em"],
            "2xl": ["1.25rem", "1.5em"],
            "3xl": ["1.675rem", "1.5em"],
            "4xl": ["2.375rem", "1.4em"],
            "5xl": ["3rem", "1.3em"],
            "6xl": ["3.75rem", "1.2em"],
            "7xl": ["4.25rem", "1.2em"],
        },
        screens: {
            ...defaultTheme.screens,
            "xs": "475px",
            'md': "960px",
        },
        extend: {
            fontFamily: {
                "montserrat": ["Montserrat", "sans-serif"],
                "roboto": ["Roboto", "-apple-system", "BlinkMacSystemFont", "Tahoma", "sans‑serif"],
                "sourceCodePro": ["Source Code Pro", "monospace"],
                "lora": ["Lora", "serif"],
                "inter": ["Inter", "sans-serif"]

            },
            keyframes: {
                fadeInOpacity: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                },
            },
            animation: {
                fadeInOpacity: "fadeInOpacity 0.3s ease-in 1",
            },
            textShadow: {
                'text': '0px 5px 15px rgba(0, 0, 0, 0.5)',
            },
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar-hide'),
        require('tailwindcss-textshadow')
    ],
}
