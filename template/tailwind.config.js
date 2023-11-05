/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#565248",
                secondary: "#DDD2BC",
            },
            textColor: ["responsive", "hover", "focus", "placeholder"],
        },
    },
    plugins: [],
};
