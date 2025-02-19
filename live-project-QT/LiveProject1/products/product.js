
function getallProducts(){
   var prom =  fetch("https://fakestoreapi.com/products")
   prom.then((res)=>{
      return  res.json();
    }).then((data)=>{
        console.log(data);
        data.map((product)=>{
            createCard(product);
        });
       
    }).catch((error)=>{
        console.log("Error! Can't load data ",error);
    });
}
function createCard(product){
  var {image,price,title,category} = product;
    var div1 = document.createElement("div");
    div1.className="cards";
    var img = document.createElement("img");
    img.src=image;
    img.width=300;
    img.height=300;
    img.alt="Image is not displayed";
    var div2 = document.createElement("div");
    div2.className="cardheading";
    let h5 = document.createElement("h3");
    h5.innerText =`Categeory : ${category}`;
    let i = document.createElement("i");
    i.className = "bi bi-heart";
    div2.appendChild(h5);
    div2.appendChild(i);
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.innerText =`Price : $${price}`;
    p2.innerText = title;
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.innerText = "Add To Cart";
    btn2.innerText = "AboutProduct";
    div1.appendChild(img);
    div1.appendChild(div2);
    div1.appendChild(p2);
    div1.appendChild(p1);
    div1.appendChild(btn1);
    div1.appendChild(btn2);
     document.getElementById("container").appendChild(div1);

}