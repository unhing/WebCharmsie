export class BlogPost {
    constructor(
        public title:string="",
        public date:string= new Date().toLocaleDateString(),
        public author:string="",
        public content:string="",
        public coverImage:string="",
    ) { }
}