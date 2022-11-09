type CarTypeProps = {
    name: string;
    brand: string;
    photo: string;
    combustible: 'energy' | 'gasoline';
    rent: {
        period: string;
        price: number;
    }
}

export default CarTypeProps;