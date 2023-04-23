const addBtn = document.querySelector('#addBtn')
const taskInput = document.querySelector('#taskInput')
const todoList = document.querySelector('.todo-list')

function renderResult(keyWord){
    let result = resultType(keyWord)
    renderItem(result)
    InputReset()
}

function resultType(keyWord){
  return `<li     class="todo-item">
    <span class="item">${keyWord}</span>
    <button class="closeBtn">X</button>
    </li>`
}

function InputValue(){
  return taskInput.value.trim()
}

function renderItem(result){
  todoList.insertAdjacentHTML('afterbegin' , result)
}

function InputReset(){
  taskInput.value = ''
  taskInput.focus()
}

function removeItem(e){
  if(e.target.localName === 'button'){
    const btn = e.target
    btn.parentElement.remove()
  };
}


function result(keyWord){
  if(keyWord !== ''){  
    renderResult(keyWord)
  }else{
    InputReset()
  }
}

addBtn.addEventListener('click' , ()=>{
  const keyWord = InputValue()
  result(keyWord)
})


taskInput.addEventListener('keypress' , (e)=>{
  if(e.key === 'Enter'){
    const keyWord = InputValue()
    result(keyWord)
  };
})

todoList.addEventListener('click' , (e)=>{
  removeItem(e)
})