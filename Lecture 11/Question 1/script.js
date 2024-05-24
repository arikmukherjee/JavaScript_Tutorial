let DATA = "Secret information";

class User{
    constructor(name , email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Website data = ", DATA);
    }
}

let student1 = new User("abc","abc@gmail.com");
let student2 = new User("bcd","bcd@gmail.com");
let student3 = new User("def","def@gmail.com");
console.log(student1.viewData());