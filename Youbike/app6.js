const youBikeAPI = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'


const searchForm = document.querySelector('#searchForm')
const searchKeywordInput = document.querySelector('#searchKeyword')
const siteList = document.querySelector('.siteList')



function filterProgram(stations ,keyWord){
  return stations.filter((station)=>{
    return station.ar.includes(keyWord)
  })
}

function reduceProgram(station){
   return station.reduce((acc , {sna , sbi , tot , ar})=>{
    return acc + `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${sna.replace('YouBike2.0_' , '')}(${sbi}/${tot})<br>
    <small class="text-muted">${ar}</small>
    </li>`
  } , '')
}

function renderElement(station){
  siteList.textContent = ''
  siteList.insertAdjacentHTML('afterbegin' , station)
}

function resetInput(){
  searchKeywordInput.value = ''
  searchKeywordInput.focus()
}

function renderItem(stations , keyWord){
  let station = filterProgram(stations , keyWord) 
  station = reduceProgram(station)
  
  renderElement(station)
  resetInput()
}



searchForm.addEventListener('submit' , (e)=>{
  e.preventDefault()
  const keyWord = searchKeyword.value.trim()

  if (keyWord !== '') {
    fetch(youBikeAPI)
    .then((resp)=>{
      return resp.json()
    })
    .then((stations)=>{
      renderItem(stations , keyWord)
    })
    .catch((err)=>{
      console.log(err);
    })
    
  }
})