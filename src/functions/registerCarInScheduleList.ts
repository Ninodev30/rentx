import { Alert } from "react-native";
import api from "src/services/api";
import registerCarInScheduleListByUser from "./registerCarInScheduleListByUser";

type Props = (invalidDates: any, id: string) => Promise<void>;

const registerCarInScheduleList: Props = async (invalidDates, id) => {
    await api
        .put(`/schedules_bycars/${id}`, {
            id: id,
            unavailable_dates: invalidDates
        })
        .then(() => {
            registerCarInScheduleListByUser();
        })
        .catch((error) => {
            Alert.alert('Confirmar aluguel', 'não foi possível confirmar o aluguel');

            if (error.request)
                return console.log(error.request);
            if (error.response)
                return console.log(error.response);

            console.log(error);
            setIsLoading(false);
        });
}