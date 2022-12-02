import CarDTOType from "../dtos/CarDTO";
import api from "../services/api";

type Props = (car: CarDTOType, user_id: number) => Promise<void>;

const registerCarInScheduleListByUser: Props = async (car, user_id) => {
    await api
        .post(`schedules_byuser`, {
            user_id: user_id,
            car: car
        })
        .catch((error) => {
            throw error;
        })
}

export default registerCarInScheduleListByUser;