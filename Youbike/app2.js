const DATE_SOUCE = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const searchForm = document.querySelector("#searchForm")
const searchKeywordInput = document.querySelector("#searchKeyword")
const siteList = document.querySelector("siteList")
searchForm.addEventListener("submit" , (e) => {
    e.preventDefault()
    const keyValue =searchKeyword.value.trim()


    
    if (keyValue !== "")
        {fetch(DATE_SOUCE)
            .then((reps) => {
                return reps.json()
            })
            .then((stations)=>{
                const result = stations
                .filter((stationInformation) => {
                    return stationInformation.ar.includes(keyValue)
                })
                .reduce((acc , stationInformation) =>{
                       return acc + (`<li class="list-group-item  fs-5"><iclass="fas fa-bicycle"></iclass=>
                       ${stationInformation.sna.replace("YouBike2.0_","")}(${stationInformation.sbi}/${stationInformation.tot})<br><small class="text-muted">${stationInformation.ar}</small></li>`
                    )    
                } , "")
                siteList.textContent = ""
                siteList.insertAdjacentHTML("afterbegin" , result)
                searchKeywordInput.foucs()
            })
            .catch((err)=>{
                
                console.log(err);
            })
        }else{
            alert("Please enter adderss thank for cooperate ")
        }
})


