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

class Admin extends User {
    constructor(name , email){
        super(name , email);
    }
    editData(){
        DATA = "Some new value";
    }
}

let Admin1 = new Admin("admin","admin@college.com");