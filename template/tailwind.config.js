/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#000",
                secondary: "#fff",
            },
            textColor: ["responsive", "hover", "focus", "placeholder"],
        },
    },
    plugins: [],
};
