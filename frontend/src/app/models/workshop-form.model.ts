export class WorkshopForm {
    constructor(
        public name:string="",
        public phoneNumber:string="",
        public email:string="",
        public date:string = new Date().toLocaleDateString(),
        public billImage:string="",
        public note:string=""
    ) { }
}