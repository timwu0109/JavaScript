const API = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'


const searchForm =document.querySelector('#searchForm')
const searchKeywordInput =document.querySelector('#searchKeyword')
const siteList = document.querySelector('.siteList')


function a (stations , keyWord) {
   return stations.filter((station)=>{ return station.ar.includes(keyWord)
  })
}

function b (station){
  return station.reduce((acc , {sna , sbi , tot , ar})=>{
    return acc + `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${sna.replace('YouBike2.0_','')}(${sbi}/${tot})<br>
    <small class="text-muted">${ar}</small>
    </li>`
  } , '') 
}

function renderItem(stations , keyWord){
  let station =  a(stations ,keyWord)
  station = b(station)
  renderResult(station)
  resetInput()
}

function renderResult(station){
  siteList.textContent = ''
  siteList.insertAdjacentHTML('afterbegin' ,station )
}

function resetInput(){
  searchKeywordInput.value = ''
  searchKeywordInput.focus()
}


searchForm.addEventListener('submit' , (e)=>{
  e.preventDefault()
  const keyWord = searchKeywordInput.value.trim()

  if(keyWord !== ''){
    fetch(API)
    .then((resp)=>{
      return resp.json()
    })
    .then((stations)=>{
      const station =
      renderItem(stations , keyWord)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }
})