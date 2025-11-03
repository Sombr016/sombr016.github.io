function generateHTML() {
    //Variables for function
    const pageNameElement = document.getElementById("pageName");
    const formOutputDataElement = document.getElementById("formOutputData");
    const rawHTMLElement = document.getElementById("rawHTML");

    //Change page h2 to Introduction HTML
    pageNameElement.innerHTML = "Introduction HTML";

    formOutputDataElement.innerHTML = "<code><h1>Hello</h1></code>";
    formOutputDataElement.classList.add("inactive");
    rawHTMLElement.classList.remove("inactive");
}