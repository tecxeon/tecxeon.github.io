/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                boxColor: "rgba(0, 0, 0, 0.1)",
                button: "#6e2435",
                labelColor: "rgba(187, 187, 191, 0.4)",
                lbox: "rgba(0, 0, 0, 0.1)",
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
