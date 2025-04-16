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
    type: string;
    image: string;
    id: string;
};

export type RestaurantCategoryModel = {
    name: string;
    _id: string;
    restaurantId: string;
};

export type RestaurantFoodModel = {
    name: string;
    price: number;
    restaurantCategory: RestaurantCategoryModel;
}