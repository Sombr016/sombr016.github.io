
const nameElement = document.getElementById("nameOutput");

let formElements = {
    nameOutput: "nameElement.value"
};

function generateJSON(){
    const rawJSONElement = document.getElementById("rawJSON");
    const formOutputDataElement = document.getElementById("formOutputData");
    const nameElement = document.getElementById("nameOutput");
    const pageNameElement = document.getElementById("pageName");

    //show the JSON section
    submitData();

    rawJSONElement.classList.remove("inactive");
    formOutputDataElement.classList.add("inactive");
    //Replace h2 with introduction HTML
    pageNameElement.innerHTML = "Introduction HTML";


    rawJSONElement.innerHTML = JSON.stringify(formElements);
    
}