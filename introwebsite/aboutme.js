const today = new Date();

let data = ['Mexican', 'Japanese', 'Chinese', 'American', 'Any that is edible' ];
  
let list = document.getElementById("myList");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})