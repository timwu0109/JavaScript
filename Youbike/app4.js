const youBikeAPI = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

const searchForm = document.querySelector('#searchForm')
const searchKeywordInput =
document.querySelector('#searchKeyword')
const siteList = document.querySelector('.siteList')


function filterStation(stations ,keyWord){
  return stations.filter((station)=> station.ar.includes(keyWord)
  )
}


function reduceStation(stations){
  return stations.reduce((acc , {sna , sbi , tot , ar})=>
    acc + `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${sna.replace('YouBike2.0_','')}(${sbi}/${tot})<br>
    <small class="text-muted">${ar}</small>
    </li>`
  , "")
}


function renderStation (result){
  siteList.textContent = '' 
  siteList.insertAdjacentHTML('afterbegin' , result )
}


function renderItem(stations , keyWord){
  let result = filterStation(stations , keyWord)
  result = reduceStation(result)

  renderStation(result)
}


searchForm.addEventListener('submit' ,(e)=>{
  e.preventDefault()

  const keyWord = searchKeywordInput.value.trim()

  if(keyWord !== ''){
    fetch(youBikeAPI)
    .then((resp)=>{
      return resp.json()
    })
    .then((stations)=>{
      renderItem(stations ,keyWord)
    })
    .catch((err)=>{
      console.log(err);
    })
  }


})