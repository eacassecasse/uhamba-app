/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Archia', 'sans-serif'],
            },
            colors: {
                primary: '#97c680',
                dark: '#1e1e2f',
            },
            boxShadow: {
                'inner-expand': 'inset 0 45px 0 0 #1e1e2f',
                'inner-expand-hover': 'inset 0 45px 0 -50px #1e1e2f',
                'inner-expand-lg': 'inset 0 120px 0 0 #1e1e2f',
                'inner-expand-lg-hover': 'inset 0 120px 0 -120px #1e1e2f',
            },
        }
    },
    plugins: [],
}