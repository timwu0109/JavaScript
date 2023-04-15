const DATE_SOUCE = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const searchForm = document.querySelector("#searchForm")
const searchKeywordIput = document.querySelector("#searchKeyword")
const siteList = document.querySelector(".siteList")



searchForm.addEventListener("submit",(e) => {
    e.preventDefault()
    const stationlist = searchKeywordIput.value.trim()

    if(stationlist !== " "){
        fetch(DATE_SOUCE)
    .then((resp)=>{
        return resp.json()
    })
    .then((stations)=>{
        const result = stations
        .filter((station) => {
            console.log(station);
            return station.ar.includes(stationlist)
        })
        .reduce((acc,{sna , sbi , tot , ar})=>{
            return(
                acc + `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
               ${sna.re}(${sbi}/${tot})<br>
                <small class="text-muted">${ar}</small>
              </li>`
            )
        } , '')
        siteList.textContent = ''
        siteList.insertAdjacentHTML('afterbegin',result)
        
        

    })
    .catch((err)=>{
        console.log("err");
    })
    }



})

