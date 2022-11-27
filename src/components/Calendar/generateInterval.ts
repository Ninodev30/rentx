import { theme } from 'native-base';
import { DateData } from 'react-native-calendars';
import { eachDayOfInterval, format } from 'date-fns';
import SelectedDatesProps from 'src/@types/selectedDates';
import getPlataformDate from '@utils/getPlataformDate';

type Props = (start: DateData, end: DateData) => SelectedDatesProps;

const generateInterval: Props = (start, end) => {
    let interval: SelectedDatesProps = {};

    eachDayOfInterval({
        start: new Date(start.timestamp),
        end: new Date(end.timestamp)
    }).forEach((item) => {
        const date: string = format(getPlataformDate(item), 'yyyy-MM-dd');

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date
                    ? theme.colors.red[500] : theme.colors.gray[100],
                textColor: start.dateString === date || end.dateString === date
                    ? theme.colors.white : theme.colors.red[500],
            }
        }
    })

    return interval;
}

export default generateInterval;