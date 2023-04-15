const DATE_SOUCE = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const searchForm = document.querySelector("#searchForm")
const siteList = document.querySelector(".siteList")
const searchKeywordIput =document.querySelector("#searchKeyword")
searchKeywordIput.focus()


searchForm.addEventListener("submit",(e) =>{
    e.preventDefault()
 const ketWordValue =  searchKeywordIput.value.trim()

    if(ketWordValue !== "" ){
        fetch(DATE_SOUCE)
            .then((resp)=>{
            return resp.json()
            })
            .then((stations)=>{
                const result = stations
                .filter((station)=>{
                    return station.ar.includes(ketWordValue)
                })// 
                .reduce((acc , {sna , sbi , tot ,ar} )=>{
                    return (
                        acc + `<li class="list-group-item fs-5"><i class="fas fa-bicycle"></i>
                       ${sna.replace("YouBike2.0_","")}(${sbi}/${tot})<br><small class="text-muted">${ar}</small></li>`
                    )
                }, "")
                siteList.textContent=" "
                siteList.insertAdjacentHTML("beforeend" , result)
                searchKeywordIput.focus()
            })
            .catch((err)=>{
                console.log(err);
            })
    }else{
        alert("Please entern message thank for your cooperate")
    }
})



