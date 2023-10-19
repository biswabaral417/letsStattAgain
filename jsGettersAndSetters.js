let a={
    fname:"hari",
    lname:"ram",
    get fullname(){
        return `${this.fname} `+`${this.lname}`
    },
    set fullname(value){
    [this.fname,this.lname]=value.split(" ")
    }
}

a.fullname="biswa baral"

console.log(a.fullname)



