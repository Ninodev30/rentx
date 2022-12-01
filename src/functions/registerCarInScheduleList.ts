import api from "../services/api";

type Props = (invalidDates: any, id: string) => Promise<void>;

const registerCarInScheduleList: Props = async (invalidDates, id) => {
    await api
        .put(`/schedules_bycars/${id}`, {
            id: id,
            unavailable_dates: invalidDates
        })
        .catch((error) => {
            throw error;
        });
}

export default registerCarInScheduleList;