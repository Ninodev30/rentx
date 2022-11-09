import { extendTheme } from 'native-base';

const THEME = extendTheme({
    colors: {
        gray: {
            900: '#1B1B1F',
            800: '#29292E',
            700: '#474740',
            600: '#7A7A80',
            500: '#AEAEB3',
            400: '#E1E1E8',
            300: '#EBEBF0',
            200: '#F4F5F6',
            100: '#FDEDEF'
        },
        green: {
            500: '#03B252'
        },
        red: {
            500: '#DC1637'
        },
        white: '#FFFFFF'
    },

    fontConfig: {
        Inter: {
            400: { normal: 'Inter_400Regular' },
            500: { normal: 'Inter_500Medium' }
        },
        Archivo: {
            400: { normal: 'Archivo_400Regular' },
            500: { normal: 'Archivo_500Medium' },
            600: { normal: 'Archivo_600SemiBold' }
        }
    },

    fonts: {
        body: 'Inter',
        mono: 'Archivo',
    },

    fontSizes: {
        'xs': 10,
        'sm': 13,
        'md': 15,
        'lg': 20,
        'xl': 25,
        '2xl': 30
    },
    sizes: {
        23: 92,
        27: 108
    }
})

export default THEME;