// let todoele = document.getElementById("taskinfo");
// let tasklistss = document.getElementById("tasklist");
// document.getElementById("add").onclick = function() {
//     if(todoele.value === ''){
//         alert("enter a value");
//     }
//     else{
//         tasklistss.innerText =task.innerHTML + `
//          <div class="task">
//             <span id="work">${todoele.value}</span>
//             <button class="del"><i class = "fa fa-trash"></i></button>4
//          </div>`
//          let alltasks = document.querySelectorAll('.del')
//          for (i=0;i<alltasks.length;i++){
//             alltasks[i].onclick = function(){
//                 console.log(this.parentNode)
//                 this.parentNode.removeChild()
//             }
//          }
//          todoele.value =""
//     }
// }


const inputval =document.getElementById("inputbox");
const list = document.getElementById("listcontainer")
function addtask(){
    if(inputval.value ===''){
        alert("you must enter a value!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputval.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputval.value = "";
    saveData();
}

list.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

},false);

