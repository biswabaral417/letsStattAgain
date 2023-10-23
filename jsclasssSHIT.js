class user {
    constructor (name){
        this.name=name
    }
    sayhi=()=>{
        console.log(this.name)
    }
}
const hari=new user("hari")
hari.sayhi()