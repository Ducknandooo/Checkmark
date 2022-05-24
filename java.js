//let myList = document.getElementById('myList');
//let li = document.getElementsByTagName('li');
//let children = myList.Children; 

function addCheckBox() {
    let myList = document.getElementById('myList');
    let checkBox = document.createElement('input');
    checkBox.setAttribute("type", "checkbox");
    myList.appendChild(checkBox);
}

// function addCheckBox() {
//     let checkBox = document.createElement('input');
//     checkBox.setAttribute('type', 'checkbox');
//     let ul = document.getElementById('myList');
//     let li = document.querySelectorAll('li');
//      li.appendChild(checkBox);
    
// }

 addCheckBox();
 






