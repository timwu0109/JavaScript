const youBikeAPI = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

const searchForm = document.querySelector('#searchForm')
const searchKeywordInput = document.querySelector('#searchKeyword')
const siteList =document.querySelector('.siteList')


searchForm.addEventListener('submit' ,(e)=>{
  e.preventDefault()
  const keyWord = searchKeywordInput.value.trim()

  if(keyWord !== ''){
    fetch(youBikeAPI)
    .then((resp)=> resp.json())
    .then((stations)=>{
      renderStation(stations,keyWord)
      // 這邊我keyword卡很久，不需要把外部的東西帶到then裡面因為then是關注fetch，所以call function要帶任何參數進去直接找到那function帶進去就好了
    })
    .catch((err)=>{
      console.log(err);
    })
  }
})

function filterStation(stations,keyWord){
  return stations.filter((station)=>station.ar.includes(keyWord))}

function reduceStation(station){
  return station.reduce((acc , {sna , sbi ,tot , ar})=> acc + `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${sna.replace("YouBike2.0_" , " ")}(${sbi}/${tot})<br>
        <small class="text-muted">${ar}</small>
    </li>` , "")
}


function renderItem (result){
  siteList.textContent = ''
  siteList.insertAdjacentHTML('afterbegin' , result)
}

function renderStation(stations,keyWord) {
  let result = filterStation(stations,keyWord) 
  result = reduceStation(result)
 
  renderItem(result)
}