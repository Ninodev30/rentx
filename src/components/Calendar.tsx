import { Feather } from '@expo/vector-icons'
import { ITheme, useTheme } from 'native-base';
import { Calendar as ReactNativeCalendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

const Calendar: React.FC = () => {
    const theme: ITheme = useTheme();

    return (
        <ReactNativeCalendar
            renderArrow={(direction) => (
                <Feather
                    size={24}
                    name={`chevron-${direction}`}
                    color={theme.colors.gray[600]}
                />
            )}
            headerStyle={{
                backgroundColor: theme.colors.white,
                paddingBottom: 10,
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.gray[300]
            }}
            theme={{
                textDayFontFamily: theme.fontConfig.Inter[400].normal,
                textDayFontSize: theme.fontSizes.md,
                textDayHeaderFontFamily: theme.fontConfig.Archivo[600].normal,
                textDayHeaderFontSize: theme.fontSizes.xs,
                textMonthFontFamily: theme.fontConfig.Archivo[600].normal,
                textMonthFontSize: theme.fontSizes.lg,
                monthTextColor: theme.colors.gray[700],
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={new Date().toString()}
        />
    )
}

export default Calendar;