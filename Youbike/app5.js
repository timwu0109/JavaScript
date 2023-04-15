const DATE_SOUCE = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const searchForm = document.querySelector("#searchForm")
const searchKeywordIput =document.querySelector("#searchKeyword")
const siteList = document.querySelector(".siteList")


searchForm.addEventListener("submit",(e) => {
    e.preventDefault()
   const keyWord = searchKeyword.value.trim()
if(keyWord !== ''){
fetch(DATE_SOUCE)
.then((post)=>{
    return post.json()
})
.then((stations)=>{
    const result = stations
        .filter((station)=> 
            station.ar.includes(keyWord))
        .reduce((acc, {sna , sbi , tot ,ar})=>{
        return acc+ (
            `<li class="list-group-item fs-5">
            <i class="fas fa-bicycle"></i>
        ${sna}(${sbi}/${tot})<br>
            <small class="text-muted">${ar}</small>
        </li>`
        )} , '')
    siteList.textContent =''
    siteList.insertAdjacentHTML('afterbegin' , result)
})
.catch((err)=>{
    console.log("err");
})

}else{
    alert("Funk are u doing")
}
})