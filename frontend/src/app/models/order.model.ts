export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    sku: string;
}

export class Order {
    constructor(
        public name:string="",
        public phoneNumber:string="",
        public email:string="",
        public comment:string=""
    ) { }
}