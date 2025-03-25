import { User } from "./User";

export type Restaurant = {
    name: string;
    category: string;
    rate: number;
};

export type RestaurantManagementModel ={
    name: string;
    address: string;
    categories: string[];
    vendorInformation: User;
}