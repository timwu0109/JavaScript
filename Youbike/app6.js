// form 還有兩個很重要的功能就是 method:"GET" < 用什麼方法送表單，預設是GET action:"https://google.com" < 送到哪裡如果沒填預設是送回自己


const api  = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

const searchForm = document.querySelector('#searchForm')
const searchKeywordInput = document.querySelector('#searchKeyword')
const siteList =document.querySelector('.siteList')




searchForm.addEventListener('submit' , (e)=>{
  e.preventDefault()
  const keyword = searchKeywordInput.value.trim()

  if(keyword !== ''){
    fetch(api)
      .then((resp)=>{
        return resp.json()
      })
      .then((stations)=>{
        const result = stations
          .filter((station)=>{
            return station.ar.includes(keyword)
          })
          .reduce((acc , {sna ,  sbi , tot , ar}) => {
            return (acc + `<li class="list-group-item fs-5">
            <i class="fas fa-bicycle"></i>
            ${sna.replace("YouBike2.0_" , " ")}(${sbi}/${tot})<br>
                <small class="text-muted">${ar}</small>
            </li>`)
          } , "")
          siteList.insertAdjacentHTML('afterbegin' , result)
      })
      .catch((err)=>{
        console.log(err);
      })
  }else{
    
  }

})

