import Typography from "typography"

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    scaleRatio: 2,
    headerFontFamily: ['Josefin Sans', 'sans-serif'],
    bodyFontFamily: ['Josefin Sans', 'sans-serif'],
    googleFonts: [
        {
            name: 'Josefin Sans',
            styles: [
                '400',
                '700',
            ],
        },
    ],
    overrideStyles: () => ({
        a: {
            fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        }
    })
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography