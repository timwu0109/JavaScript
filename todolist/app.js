// querySelectorAll 抓回來是一群el是一個no list一個空陣列，所以addEventLister就這有辦法幫他加，因為監聽只能加在el , window , document

// const closeBtns = document.querySelectorAll('.closeBtn')

// closeBtns.forEach((el)=>{
//   el.addEventListener('click' , ()=>{
//     console.log('btn');
//   })
// } )



const taskInput = document.querySelector('#taskInput')
reset()
const addBtn = document.querySelector('#addBtn')
const todoList = document.querySelector('.todo-list')

function createElement(task){
  const el  =   `<li class="todo-item">
    <span class="item">${task}</span>
    <button class="closeBtn">X</button>
    </li>`
  todoList.insertAdjacentHTML('afterbegin' , el)
}


function  reset(){
  taskInput.value = ' '
  taskInput.focus()
}

function addTask(task){
  task = task.trim()
 
  if (task){
    createElement(task)
    reset()
}}

todoList.addEventListener('click',(e)=>{
  if(e.target.localName === 'button'){
    const btn = e.target
    btn.parentElement.remove();
    };
})

addBtn.addEventListener('click' , ()=>{
  addTask(taskInput.value)
})

taskInput.addEventListener('keypress' , (e)=>{
  if(e.key === 'Enter'){
    addTask(taskInput.value)
    } 
})



