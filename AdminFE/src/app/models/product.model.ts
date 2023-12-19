export class Product {
    constructor(
        public sku:string="",
        public name:string="",
        public category:string="",
        public price:number=0,
        public image:string="",
        public description:string="",
    ) { }
}