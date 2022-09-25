const foodList = ["Mexican","Japanese","Chinese","American"];

const newList = document.createElement('ul');
newList.innerHTML = '<li>{$foodList[0]}</li><li>${myList[1]}</li>';
document.body.appendChild(newList);
