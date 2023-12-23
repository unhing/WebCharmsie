export class User {
    constructor(
        public name:string="",
        public dateOfBirth:Date= new Date(),
        public email:string="",
        public address:string="",
        public phoneNumber:string="",
        public password:string="",
    ) { }
}