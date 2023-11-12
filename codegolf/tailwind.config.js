/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                boxColor: "rgba(0, 0, 0, 0.7)",
                button: "rgba(73 75 88)",
                labelColor: "rgba(187, 187, 191)",
                lbox: "rgba(255, 255, 255, 0.2)",
            },
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
            boxShadow: {
                custom: "0 10px 30px rgba(0, 0, 0, 0.5)",
            },
            lineHeight: {
                10: "2.5rem",
            },
        },
    },
    plugins: [],
};
