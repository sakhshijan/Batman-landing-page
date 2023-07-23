/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            colors: {
                'primary-color': '#FDFF00',
                'primary-dark': '#000000',
                'dark-80': '#383838',
                'dark-70': '#565656',
                'dark-60': '#6A6A6A',
                'dark-50': '#929292',
                'dark-40': '#B2B2B2',
                'dark-30': '#D6D6D6',
                'dark-20': '#E7E7E7',
            },

            fontFamily: {
                'space-grotesk': ['Space Grotesk']
            }
        },

    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],

}
