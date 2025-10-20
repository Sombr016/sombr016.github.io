

function updateTitle(){
    const siteName= "Bingus";

    const siteNameElement= document.getElementById("siteName");
    siteNameElement.textContent = siteName;
}
document.getElementById("siteName").addEventListener("click", updateTitle); //updates the site name when clicking the element with the siteName id

