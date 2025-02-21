

fetch("https://api.npoint.io/bc6397dc772b698de96f").then((data)=> {
    return data.json();
}).then((completedata) => {
    let data1 ="";
    completedata.forEach((values)=>
    {
        data1 += ` 
    
        <div class="card">
        <div class="topcard>
         <div class="top">
         <h1>${values.name}</h1>
          <h1>${values.category}</h1>
         <h2>${values.price}</h2>
         <h3>${values.stock}</h3>
        </div>
         <img src=${values.images[0]} alt="image is not displayed" class="image"/>
         </div>
         <div class="bottom">
         <p>${values.description}</p>
         <h2>Rating: ${values.rating} ⭐</h2>
         <bold>Reviews:</bold>
         </div>
        </div>
        
        `;
    });
    document.getElementById("root").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})