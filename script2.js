const mainContainer = document.querySelector('.mainContainer')
const tabContainer = document.querySelector('.tabContainer')
const tabSearchButton = document.querySelector('.tabSearchButton')


async function getTabs() {

const searchBarValue = document.querySelector('.tabSearchBar').value
const searchBarLength = searchBarValue.length
const tabData = await fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${searchBarValue}`); 
const tabDataJson = await tabData.json(); 
tabContainer.innerHTML = ""
const length = tabDataJson.length

if (length == 0 && searchBarLength > 0){
        const error = document.createElement("p")
        error.innerHTML = `0 results found for "${searchBarValue}"`
        error.className = "errorMessage"
        tabContainer.append(error)
    }

for (const titles of tabDataJson){
    
    const songId = titles.id
    const songTitle = document.createElement("p")
    const songLink = document.createElement('a')
    const textNode = document.createTextNode("Click Here for Tabs")
    songLink.append(textNode)
    songLink.target = '_blank'
    songTitle.innerHTML = titles.title + ` - Artist: ` + titles.artist.nameWithoutThePrefix
    songTitle.className = "songTitle"
    songLink.href = `http://www.songsterr.com/a/wa/song?id=${songId}`
    songLink.className = "songLink"
    tabContainer.append(songTitle)
    tabContainer.append(songLink)  
     
}






}


tabSearchButton.addEventListener("click", getTabs)