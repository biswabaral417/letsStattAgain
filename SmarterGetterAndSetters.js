//this is just like using regexx 
//validation can be done on getters and setters 


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
        if (b.fullname.split(" ")) {//this is nit working correctly
            
            [b.fname,b.lname]=value.split(" ");
        }

    }
})
b.fullname="hari ram";

console.log(b.fullname)