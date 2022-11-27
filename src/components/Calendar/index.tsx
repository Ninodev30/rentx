import { Feather } from '@expo/vector-icons'
import { Icon, ITheme, useTheme } from 'native-base';
import { Calendar as ReactNativeCalendar, CalendarProps, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

const Calendar: React.FC<CalendarProps> = ({ ...rest }) => {
    const { colors, fontConfig, fontSizes }: ITheme = useTheme();

    return (
        <ReactNativeCalendar
            renderArrow={(direction) => (
                <Icon
                    as={Feather}
                    size={6}
                    name={`chevron-${direction}`}
                    color='gray.600'
                />
            )}
            headerStyle={{
                backgroundColor: colors.white,
                paddingBottom: 10,
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: colors.gray[300]
            }}
            theme={{
                textDayFontFamily: fontConfig.Inter[400].normal,
                textDayFontSize: fontSizes.md,
                textDayHeaderFontFamily: fontConfig.Archivo[600].normal,
                textDayHeaderFontSize: fontSizes.xs,
                textMonthFontFamily: fontConfig.Archivo[600].normal,
                textMonthFontSize: fontSizes.lg,
                monthTextColor: colors.gray[700],
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            firstDay={1}
            minDate={new Date().toString()}
            markingType='period'
            {...rest}
        />
    )
}

export default Calendar;