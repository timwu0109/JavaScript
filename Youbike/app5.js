const API = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'


const searchForm =document.querySelector('#searchForm')

const searchKeywordInput =document.querySelector('#searchKeyword')

const siteList = document.querySelector('.siteList')

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
      stations.filter((station)=>{ return station.ar.includes(keyWord)
      })
      .reduce((acc , {sna , sbi , tot , ar})=>{
        return acc + `<li class="list-group-item fs-5">
        <i class="fas fa-bicycle"></i>
        ${sna.replace('YouBike2.0_','')}(${sbi}/${tot})<br>
        <small class="text-muted">${ar}</small>
        </li>`

      } , '') 
      
      siteList.textContent = ''
      siteList.insertAdjacentHTML('afterbegin' ,station )
      searchKeywordInput.value = ''
      searchKeywordInput.focus()
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }
})