const taskInput = document.querySelector('#taskInput')
taskInput.focus()
const addBtn = document.querySelector('#addBtn')
const ul = document.querySelector('.todo-list')
const closeBtn = document.querySelectorAll('.closeBtn')

const addTask = () => {
  const task = taskInput.value.trim()
  const el  =   `<li class="todo-item">
  <span class="item">${task}</span>
  <button class="closeBtn">X</button>
  </li>`

  if (task){
    ul.insertAdjacentHTML('afterbegin' , el)
    taskInput.value = ' '
    taskInput.focus()
  }}



closeBtn.addEventListener('click' , () => {
    console.log("close");
})
  




addBtn.addEventListener('click' , addTask)

 taskInput.addEventListener('keypress' , (e)=>{
    console.log(e);
  if(e.key === 'Enter'){
    addTask()
    } 
 })