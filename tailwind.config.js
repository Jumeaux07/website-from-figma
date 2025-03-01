/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Ajoutez vos polices Google ici
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                // Vous pouvez ajouter d'autres polices personnalisées
                display: ['Poppins', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}