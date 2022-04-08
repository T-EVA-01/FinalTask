import variables from './variables'
interface fontListObjects {
    name: string,
    thickness: string,
    weight: number,
    formats?: string[]
}

const fontList: fontListObjects[] = [
    {
        name: variables.fonts.workSans,
        thickness: 'Light',
        weight: 300
    },
    {
        name: variables.fonts.workSans,
        thickness: 'Regular',
        weight: 400
    },
    {
        name: variables.fonts.workSans,
        thickness: 'Medium',
        weight: 500
    },
    {
        name: variables.fonts.workSans,
        thickness: 'Bold',
        weight: 700
    },
    {
        name: variables.fonts.workSans,
        thickness: 'Black',
        weight: 900
    }
]

const fontsFormats: {
    [index: string]: string
} = {
    eot: 'eot',
    woff: 'woff',
    woff2: "woff2",
    ttf: 'truetype',
    otf: 'truetype',
}

const fonts: () => string = () => {
    return fontList.reduce((str, { name, thickness, weight, formats = ['eot', 'ttf', 'woff', 'woff2'] }) =>
    (str += `
        @font-face {
            font-family: '${name}';
            src: ${formats.reduce((str, format) =>
                (str += `url(/fonts/${ name }${ thickness ? `-${ thickness }` : '' }.${ format }) format('${ fontsFormats[format] }'),`)
            , '').slice(0, -1)};
            font-weight: ${weight};
            font-style: normal;
            font-display: fallback;
        }`)
    , '')
}

export default fonts