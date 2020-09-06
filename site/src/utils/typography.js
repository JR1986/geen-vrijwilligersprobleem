import Typography from "typography"

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Josefin Sans', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    googleFonts: [
        {
            name: 'Josefin Sans',
            styles: [
                '700',
            ],
        },
        {
            name: 'Open Sans',
            styles: [
                '400',
            ],
        },
    ],
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography