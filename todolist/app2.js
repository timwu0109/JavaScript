// 用jQuery版本

const taskInput = document.querySelector('#taskInput')
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('.todo-list')

function addTask(task){
  task = task.trim()

  if (task !== ''){
    createTaskElement(task)
    resetInput()
  }
}

function createTaskElement(task){
  const el  = ` <li class="todo-item">
  <span class="item">${task}</span>
  <button class="closeBtn">X</button>
  </li>`

  list.insertAdjacentHTML
  ('afterbegin' , el)
}

function resetInput(){
  taskInput.value = ''
  taskInput.focus()
}

$('#addBtn').click(() => {
  addTask(taskInput.value)
})
// addBtn.addEventListener('click' , () => {
//   addTask(taskInput.value)
// })

$('#taskInput').keydown((e)=>{
  if(e.key === 'Enter'){
    addTask(taskInput.value)
  }
})
// taskInput.addEventListener('keydown' , (e)=>{
//   if(e.key === 'Enter'){
//     addTask(taskInput.value)
//   }
// })

$('.todo-list').click((e)=>{
  if(e.target.localName === 'button'){
    const btn = e.target
    btn.parentElement.remove()
  }
})
// list.addEventListener('click' , (e)=>{
//   if(e.target.localName === 'button'){
//     const btn = e.target
//     btn.parentElement.remove()
//   }
  
// })


// document.addEventListener('DOMContentLoaded',()=>{
//   console.log(123);
// })

// $().ready(function(){
//   console.log(123);
// })
