interface ICoordinates {
    longitude: string;
    latitude: string;
}

interface ILocation {
    type: string;
    coordinates: ICoordinates;
}

interface IAddress {
    cep: string;
    state?: string;
    city: string;
    neighborhood?: string;
    street?: string;
    service?: string;
    location: ILocation;
}


export { IAddress, ICoordinates, ILocation };