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
        public address:string="",
        public totalValue: number=0,
        public orderDate: string=new Date().toLocaleDateString(),
        public paymentMethod: string="",
        public cartOrder: Array<CartItem>=[]
    ) { }
}