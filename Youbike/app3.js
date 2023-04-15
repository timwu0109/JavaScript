const DATE_SOUCER = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'


const searchForm = document.querySelector('#searchForm')
const searchKeywordInput = document.querySelector('#searchKeyword') 
const siteList = document.querySelector('.siteList')


searchForm.addEventListener('submit' , (e)=>{
  e.preventDefault()
  const keyWord = searchKeyword.value.trim()

  if(keyWord !== ''){
    fetch(DATE_SOUCER)
    .then((resp)=> resp.json())
    .then((stations)=>{
      renderStation(stations , keyWord)
    })
    .catch((err)=>{
      console.log(err);
    })
  }else{
    alert('請輸入正確文字')
  }
})

function filterStation(stations , keyWord) {
  return stations.filter((station)=>{ return station.ar.includes(keyWord);
  })
}

function reduceStation(stations) {
  return stations.reduce((acc , {sna , sbi , tot ,ar})=>
    acc + `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${sna.replace('YouBike2.0_','')}(${sbi}/${tot})<br>
    <small class="text-muted">${ar}</small>
    </li>`
  , '')
}

function renderItem(result) {
  siteList.textContent = ''
  siteList.insertAdjacentHTML('afterbegin' , result)
}

function renderStation(stations ,keyWord) {
  let result = filterStation(stations , keyWord)
  result = reduceStation(result)

  renderItem(result)
}

