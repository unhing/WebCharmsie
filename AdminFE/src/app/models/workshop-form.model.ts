export class WorkshopForm {
    constructor(
        public _id: string="",
        public name:string="",
        public phoneNumber:string="",
        public email:string="",
        public date:string = new Date().toLocaleDateString(),
        public billImage:string="",
        public note:string="",
        public status: string="unconfirmed"
    ) { }
}