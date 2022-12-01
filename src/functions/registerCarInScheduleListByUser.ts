const registerCarInScheduleListByUser: () => Promise<void> = async () => {
    await api
        .post(`schedules_byuser`, {
            user_id: 1,
            car
        })
        .then(() => {
            navigate('concluded_schedule');
        })
        .catch((error) => {
            Alert.alert('Confirmar aluguel', 'não foi possível confirmar o aluguel');

            if (error.request)
                return console.log(error.request);
            if (error.response)
                return console.log(error.response);

            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
}

export default registerCarInScheduleListByUser;