import { extendTheme } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

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
        'xs': RFValue(10),
        'sm': RFValue(13),
        'md': RFValue(15),
        'lg': RFValue(20),
        'xl': RFValue(25),
        '2xl': RFValue(30)
    }
})

export default THEME;