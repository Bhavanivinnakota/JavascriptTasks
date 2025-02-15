const user = {name:"Alice",age:25,city:"NewYork"}
var count = 0;
function countProperties(user){
          for (let i in user){
            count = count+1;
          }
     console.log( count);
}

countProperties(user);