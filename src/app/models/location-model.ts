import { ProductModel } from "./product-model";

export class LocationModel {
    image: string;
    licences: number;
    name: string;
    products: ProductModel;
    enrollmentDate: number | string;
}
