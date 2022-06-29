const input = document.querySelector('#txtHere');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.todo-list');
const todoList = document.querySelector('.toDo');
const h1 = document.querySelector('h1');

//time and date 
const date = new Date();
const hours = date.getHours();
const header = document.querySelector('.header');

//greetings
if (hours >= 18) {
  h1.innerHTML = 'Good Evening';
  header.style.background = '#080909e7'
  addBtn.style.background = '#080909e7'
}else if (hours >= 12) {
  h1.innerHTML = 'Good Afternoon';
}else if (hours >= 0) {
  h1.innerHTML = 'Good Morning';
}



//addEvent 
addBtn.addEventListener('click', addItems);
ul.addEventListener('click', checkList);

//function
function addItems(e){
  e.preventDefault();
  if (input.value !== undefined && input.value !== "") {
    //create a li item
const li = document.createElement('li');
const divNew = document.createElement('div')
const check = document.createElement('a');
const trash = document.createElement('a');

//adding classList 
li.className = 'todo-list-emelent';
divNew.className = 'elBtn'
check.className = 'check';
trash.className = 'trash';

//adding elements to item 
li.textContent = input.value;
input.value = '';
check.innerHTML = '✓';
trash.innerHTML = '×';


//append
divNew.append(check);
divNew.append(trash);
li.append(divNew);
ul.append(li);

  }else
 alert("please Enter Your Item");
  
}

function checkList(e){
  e.preventDefault();
  let el = e.target;
  let removeEl = el.parentNode.parentNode;
  if (el.classList.contains('trash')) {
    if (confirm('Are you sure?')) {
      removeEl.remove();
    }
  }else if (el.classList.contains('check')) {
    
    removeEl.classList.toggle('completed');
  }
}

//filter
function updateList(e){
  e.preventDefault();
  //filter 

const items = ul.getElementsByTagName('li');

items.forEach(function(toDo){
  switch (e.target.value) {
    case 'all':
      toDo.style.display = 'flex'
      break;
    case 'complete':
      if(toDo.classList.contains('completed')){
        toDo.style.display = 'flex';
      }else {
      toDo.style.display = 'none';
    //  break;
      }
      break; 
      case 'incomplete':
      if(!toDo.classList.contains('completed')){
        toDo.style.display = 'flex';
      }else {
        toDo.style.display = 'none';
    //  break;
      }
      break;
      
      // code
  }
});
console.log(items)
}

