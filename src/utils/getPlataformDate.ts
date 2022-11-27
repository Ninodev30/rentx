import { Platform } from 'react-native';
import { addDays } from 'date-fns';

const getPlataformDate: (date: Date) => Date = (date) => {
    if(Platform.OS === 'ios')
        return addDays(date, 1);

    return date;
}

export default getPlataformDate;