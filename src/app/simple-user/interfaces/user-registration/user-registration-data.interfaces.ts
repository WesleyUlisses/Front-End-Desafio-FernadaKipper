import { IAddress } from '../../../shared/interfaces/address/address';

interface IUserRegistrationData {
    name: string;
    email: string;
    phoneNumber?: string;
    address: IAddress;
}

export { IUserRegistrationData };