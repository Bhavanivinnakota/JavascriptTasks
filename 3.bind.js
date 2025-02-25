const user = {
    name : "Emma",
    getName : function (){
       console.log("Hello " + this.name)
    }
}
const user2 = {
   name: "Madhu"
}
const myname = user.getName.bind(user2);
myname();