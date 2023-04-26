const addBtn =  document.querySelector('#addBtn')
const taskInput = document.querySelector('#taskInput')
const todoList = document.querySelector('.todo-list')


function addItem(keyWord){
  return ` <li class="todo-item">
  <span class="item">${keyWord}</span>
  <button class="closeBtn">X</button>
  </li>`
}

function inputReset(renderItem){
  todoList.insertAdjacentHTML('afterbegin' , renderItem)
  taskInput.value = ''
  taskInput.focus()
}


function renderItem(keyWord){
  const renderItem = addItem(keyWord)

  inputReset(renderItem)
}


addBtn.addEventListener('click' , ()=>{
  const keyWord = taskInput.value.trim()

  if(keyWord !== ''){
    renderItem(keyWord)
   
  }
})


taskInput.addEventListener('keydown'  ,  (e)=>{
  const keyWord = taskInput.value.trim()
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    if(keyWord !== ''){
      renderItem(keyWord)
    }
  }
})

todoList.addEventListener('click' , (e)=>{
  if(e.target.localName ==='button'){
    const btn = e.target
    btn.parentElement.remove() 
  }
})