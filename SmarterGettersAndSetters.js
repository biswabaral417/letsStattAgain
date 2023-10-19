let b ={
    fname:"biswa",
    lname:"baral",

}
//tthe object.defprop always exist outside the object declarattion
Object.defineProperty (b ,"fullname", {
    get(){
        return `${b.fname} `+`${b.lname}`;
    },
    set(value){
        [b.fname,b.lname]=value.split(" ");

    }
})

console.log(b.fullname)