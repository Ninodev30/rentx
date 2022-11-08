type CarTypeProps = {
    name: string;
    brand: string;
    photo: string;
    motor: 'eletric' | 'combustion';
    rent: {
        period: string;
        price: number;
    }
}

export default CarTypeProps;