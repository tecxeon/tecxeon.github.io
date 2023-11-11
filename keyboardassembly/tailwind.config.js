/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                // boxColor: "rgba(22, 24, 32)",
                boxColor: "rgba(0, 0, 255)",
                button: "mediumslateblue",
                labelColor: "rgba(187, 187, 191, 0.4)",
                lbox: "#2f3138",
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
