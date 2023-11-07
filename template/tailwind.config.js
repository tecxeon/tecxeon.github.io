/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: "rgba(22, 24, 32)",
                secondary: "#eee",
                pop: "#D84E00",
                t: "rgba(187, 187, 191, 0.6)",
                p: "rgba(187, 187, 191, 0.4)",
                box: "#2f3138",
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
