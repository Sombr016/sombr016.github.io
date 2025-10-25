//constant variables do not change
const formOutputDataElement = document.getElementById("formOutputData");
const formElement = document.getElementById("form");
const container = document.getElementById("container");

//prevent default 
formElement.addEventListener("submit", (e) => e.preventDefault());

function submitData() {
    alert("submit data started");





    /*input variables*/
    //Name
    const firstNameInput = document.getElementById("firstName");
    const middleNameInput = document.getElementById("middleName");
    const lastNameInput = document.getElementById("lastName");

    //Acknowledgment
    const acknowledgementStatementInput = document.getElementById("acknowledgementStatement");
    const acknowledgementDateInput = document.getElementById("acknowledgementDate");

    //Mascot
    const mascotAdjectiveInput = document.getElementById("mascotAdjective");
    const mascotAnimalInput = document.getElementById("mascotAnimal");

    //divider
    const dividerInput = document.getElementById("divider");

    //Picture
    const pictureInput = document.getElementById("picture").files[0];
    const pictureCaptionInput = document.getElementById("pictureCaption");

    //Personal Acknowledgment
    const personalAcknowledgmentInput = document.getElementById("personalAcknowledgment");

    //Bullet points
    const personalBackgroundInput = document.getElementById("personalBackground");
    const professionalBackgroundInput = document.getElementById("professionalBackground");
    const academicBackgroundInput = document.getElementById("academicBackground");
    const primaryComputerInput = document.getElementById("primaryComputer");

    //Quote
    const quoteInput = document.getElementById("quote");
    const quoteAuthorInput = document.getElementById("quoteAuthor");

    //Links
    const linkedInInput = document.getElementById("linkedIn");
    const gitHubInput = document.getElementById("gitHub");
    const gitHubIOInput = document.getElementById("gitHubIO");
    const cltHomepageInput = document.getElementById("cltHomepage");
    const coursePageInput = document.getElementById("coursePage");
    const freeCodeCampInput = document.getElementById("freeCodeCamp");

    //Optionals
    const funnyThingInput = document.getElementById("funnyThing");
    const somethingToShareInput = document.getElementById("somethingToShare");

    /*Output Variables*/
    const publicAcknowledgmentElement = document.getElementById("publicAcknowledgmentOutput");
    const nameElement = document.getElementById("nameOutput");
    const pictureElement = document.getElementById("pictureOutput");
    const pictureCaptionElement = document.getElementById("pictureCaptionOutput");
    const personalAcknowledgmentElement = document.getElementById("personalAcknowledgmentOutput");
    const introListElement = document.getElementById("introListOutput");
    const personalBackgroundElement = document.getElementById("personalBackgroundOutput");
    const professionalBackgroundElement = document.getElementById("professionalBackgroundOutput");
    const academicBackgroundElement = document.getElementById("academicBackgroundOutput");
    const primaryComputerElement = document.getElementById("primaryComputerOutput");
    const coursesElement = document.getElementById("coursesOutput");
    const classElement = document.getElementById("classOutput");
    const quoteElement = document.getElementById("quoteOutput");
    const quoteAuthorElement = document.getElementById("quoteAuthorOutput");
    const funnyElement = document.getElementById("funnyOutput");
    const somethingElement = document.getElementById("somethingOutput");
    const linkElement = document.getElementById("linkOutput");


    /*Unhide the form*/
    formOutputDataElement.classList.remove("inactive");

    /*Form output*/

    //Public Acknowledgement
    publicAcknowledgmentElement.innerHTML = `${acknowledgementStatementInput.value} -${acknowledgementDateInput.value}`;

    //Name and Mascot 
    nameElement.innerHTML = `${firstNameInput.value} ${middleNameInput.value} ${lastNameInput.value} ${dividerInput.value} ${mascotAdjectiveInput.value} ${mascotAnimalInput.value}`;



    //Personal image
    if (!pictureInput || !pictureInput.type.startsWith('image/')) document.getElementById('pictureOutput').src = "images/jacob-cone-with-anderson.jpg";
    else {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById('pictureOutput').src = e.target.result;
        reader.readAsDataURL(pictureInput);
        reader.close();
    }
    //Picture Caption
    pictureCaptionElement.innerHTML = pictureCaptionInput.value;

    //Personal Acknowledgment
    personalAcknowledgmentElement.innerHTML = personalAcknowledgmentInput.value;

    /*Bullet points*/

    //Personal Background
    personalBackgroundElement.innerHTML = `<strong>Personal Background: </strong> ${personalBackgroundInput.value}`;
    //Professional Background
    professionalBackgroundElement.innerHTML = `<strong>Professional Background: </strong> ${professionalBackgroundInput.value}`;
    //Academic Background
    academicBackgroundElement.innerHTML = `<strong>Academic Background: </strong> ${academicBackgroundInput.value}`;
    //Primary Computer
    primaryComputerElement.innerHTML = `<strong>Primary Computer: </strong> ${primaryComputerInput.value}`;

    //Courses
    const courseNumbers = container.getElementsByClassName("courseNumberIn");
    const courseNames = container.getElementsByClassName("courseNameIn");
    const courseDescriptions = container.getElementsByClassName("courseDescriptionIn");
    var coursesOut = ``;

    for (i = 0; i < courseNumbers.length; i++) {
        coursesOut = `${coursesOut} <li><strong>${courseNumbers[i].value} - ${courseNames[i].value}: </strong> ${courseDescriptions[i].value}</li>`;
    }
    coursesElement.innerHTML = coursesOut;

    //funny thing
    if (funnyThingInput.value === "") {
        funnyElement.classList.add("inactive");
    }
    else {
        funnyElement.innerHTML = `<strong>Funny/Interesting Item to Remember Me by: </strong>${funnyThingInput.value}`;
    }

    //Something to share
    if (somethingToShareInput.value === "") {
        somethingElement.classList.add("inactive");
    }
    else {
        somethingElement.innerHTML = `<strong>I Would Also Like to Share: </strong> ${somethingToShareInput.value}`;
    }

    //Quote
    quoteElement.innerHTML = `<strong>Quote: </strong>"${quoteInput.value}"`;
    quoteAuthorElement.innerHTML = `-${quoteAuthorInput.value}`;

    //Links
    linkElement.innerHTML = `<a href="${linkedInInput.value}" target="_blank">LinkedIn</a> ${dividerInput.value}
                            <a href="${gitHubInput.value}" target="_blank">GitHub</a> ${dividerInput.value}
                            <a href="${gitHubIOInput.value}" target="_blank">GitHub.io</a> ${dividerInput.value}
                            <a href="${cltHomepageInput.value}" target="_blank">CLT Homepage</a> ${dividerInput.value}
                            <a href="${coursePageInput.value}" target="_blank">Course Page</a> ${dividerInput.value}
                            <a href="${freeCodeCampInput.value}" target="_blank">freeCodeCamp</a>`;

}

function hideForm() {
    const formOutputDataElement = document.getElementById("formOutputData");
    formOutputDataElement.classList.add("inactive");
}

function clearValues() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        if (input.type !== 'file') {
            input.value = '';
        }
    });
}

function addField() {

    //Makes the input for course id and id
    //container.appendChild(document.createTextNode("Course Id and Number: "));
    const courseNumberInput = document.createElement("input");
    courseNumberInput.setAttribute("placeholder", "Course Id and Number");
    courseNumberInput.setAttribute("class", "courseNumberIn");
    courseNumberInput.setAttribute("type", "text");
    courseNumberInput.setAttribute("value", "Math2164");
    container.appendChild(courseNumberInput);

    //Makes the input for course name
    //container.appendChild(document.createTextNode("Course Name: "));
    const courseNameInput = document.createElement("input");
    courseNameInput.setAttribute("placeholder", "Course Name");
    courseNameInput.setAttribute("class", "courseNameIn");
    courseNameInput.setAttribute("type", "text");
    courseNameInput.setAttribute("value", "Matrices and Linear Algebra");
    container.appendChild(courseNameInput);

    //Makes course description 
    const courseDescription = document.createElement("textarea");
    courseDescription.setAttribute("class", "courseDescriptionIn");
    courseDescription.value = "Very important mathematical base for many concepts in computer science.";
    container.appendChild(courseDescription);


    //Adds row break
    const breakRow = document.createElement("br");
    breakRow.setAttribute("class", "rowBreak");
    container.appendChild(breakRow);
}

//Removes the last course number input, course name input, and row break
function removeField() {
    const childs = container.getElementsByClassName("courseNumberIn");
    const children = container.getElementsByClassName("courseNameIn");
    const breakRow = container.getElementsByClassName("rowBreak");
    const courseDescription = container.getElementsByClassName("courseDescriptionIn");

    container.removeChild(childs[childs.length - 1]);
    container.removeChild(children[children.length - 1]);
    container.removeChild(breakRow[breakRow.length - 1]);
    container.removeChild(courseDescription[courseDescription.length - 1]);

}

function clearAllField(){
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

