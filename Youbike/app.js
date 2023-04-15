// 程式碼寫這裡
//preventDefault取消預設屬性
//submit 表單事件（只要有送出就會觸發事件）
// form 還有兩個很重要的功能就是 method:"GET" < 用什麼方法送表單，預設是GET action:"https://google.com" < 送到哪裡如果沒填預設是送回自己


//先去網站抓資料吧網址抓回來
const DATE_SOUCE = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const form = document.querySelector("#searchForm")
const searchKeywordIput = document.querySelector("#searchKeyword")
const siteList = document.querySelector(".siteList")

form.addEventListener("submit" , (e) => {
e.preventDefault()


const keyWord = searchKeywordIput.value.trim()

if(keyWord !== ""){
    //用fetch把資料帶進來
    fetch(DATE_SOUCE)

        .then((resp)=> {
            return resp.json()
        })
        .then((stations)=>{ 
            const resoult = stations
            .filter((station)=>{
                return station.ar.includes(keyWord)
            })
            .reduce((acc , station) =>{
                return (
                acc + `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
               ${station.sna}(${station.sbi}/${station.tot})<br>
                <small class="text-muted">${station.ar}</small>
              </li>`
              )
              
            } , "")
            siteList.textContent = " "
            siteList.insertAdjacentHTML("beforeend" , resoult)
        })
        .catch((err)=>{
            console.log(err);
        })
}

})


