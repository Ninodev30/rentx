import { RFValue } from 'react-native-responsive-fontsize';

export default {
    colors: {
        header: '#1B1B1F' ,

        background_primary: '#F4F5F6',
        background_secondary: '#FFFFFF',

        text: '#7A7A80',
        text_details: '#AEAEB3',
        title: '#474740',

        line: '#EBEBF0',

        main: '#DC1637',
        main_light: '#FDEDEF',
        success: '#03B252',

        shape: '#E1E1E8',
        shape_dark: '#29292E'
    },
    fonts: {
        family: {
            primary_400: 'Inter_400Regular',
            primary_500: 'Inter_500Medium',
        
            secondary_400: 'Archivo_400Regular',
            secondary_500: 'Archivo_500Medium',
            secondary_600: 'Archivo_600SemiBold'
        },
        size: {
            xs: `${RFValue(10)}px`,
            sm: `${RFValue(13)}px`,
            md: `${RFValue(15)}px`,
            lg: `${RFValue(20)}px`,
            xl: `${RFValue(25)}px`,
            xxl: `${RFValue(30)}px`
        }
    }
}