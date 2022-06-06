module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx}',
        './features/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            sans: ['"Work Sans"']
        },
        screens: {
            'maxmd': {'max': '767px'}
        }
    },
    plugins: []
};
