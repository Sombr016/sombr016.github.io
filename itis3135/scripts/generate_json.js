const nameElement = document.getElementById("nameOutput");

let formElements = {
    nameOutput: "nameElement.value"
};

function generateJSON(){
    const rawJSONElement = document.getElementById("rawJSON");
    const formOutputDataElement = document.getElementById("formOutputData");
    const pageNameElement = document.getElementById("pageName");

    // ensure form values/outputs are populated
    if (typeof submitData === 'function') {
        try { submitData(); } catch (e) { /* ignore errors from submitData */ }
    }

    const getVal = (id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        if (el.type === 'file') {
            const f = el.files && el.files[0];
            return f ? { name: f.name, type: f.type, size: f.size } : null;
        }
        return el.value;
    };

    // build courses array from dynamic inputs (if present)
    const container = document.getElementById('container');
    const courses = [];
    if (container) {
        const nums = container.getElementsByClassName('courseNumberIn');
        const names = container.getElementsByClassName('courseNameIn');
        const descs = container.getElementsByClassName('courseDescriptionIn');
        for (let i = 0; i < nums.length; i++) {
            courses.push({
                number: nums[i] ? nums[i].value : null,
                name: names[i] ? names[i].value : null,
                description: descs[i] ? descs[i].value : null
            });
        }
    }

    const data = {
        pageName: pageNameElement ? pageNameElement.textContent : null,
        name: {
            first: getVal('firstName'),
            middle: getVal('middleName'),
            preferred: getVal('preferredName'),
            last: getVal('lastName')
        },
        mascot: {
            adjective: getVal('mascotAdjective'),
            animal: getVal('mascotAnimal')
        },
        divider: getVal('divider'),
        picture: getVal('picture'), // includes file meta if uploaded
        pictureCaption: getVal('pictureCaption'),
        personalAcknowledgment: getVal('personalAcknowledgment'),
        personalBackground: getVal('personalBackground'),
        professionalBackground: getVal('professionalBackground'),
        academicBackground: getVal('academicBackground'),
        primaryComputer: getVal('primaryComputer'),
        courses: courses,
        quote: {
            text: getVal('quote'),
            author: getVal('quoteAuthor')
        },
        links: {
            linkedIn: getVal('linkedIn'),
            gitHub: getVal('gitHub'),
            gitHubIO: getVal('gitHubIO'),
            cltHomepage: getVal('cltHomepage'),
            coursePage: getVal('coursePage'),
            freeCodeCamp: getVal('freeCodeCamp')
        },
        optionals: {
            funnyThing: getVal('funnyThing'),
            somethingToShare: getVal('somethingToShare')
        }
    };

    // show raw JSON, hide form output section
    if (rawJSONElement) {
        rawJSONElement.classList.remove('inactive');

        // if a <pre><code> already exists, reuse it; otherwise create one
        let codeEl = rawJSONElement.querySelector('pre code');
        if (!codeEl) {
            const pre = document.createElement('pre');
            codeEl = document.createElement('code');
            codeEl.className = 'json';
            pre.appendChild(codeEl);
            rawJSONElement.appendChild(pre);
        } else {
            // ensure requested class
            if (!codeEl.classList.contains('json')) codeEl.classList.add('json');
        }

        // place JSON as text inside the code element (preserves formatting & is safe)
        codeEl.textContent = JSON.stringify(data, null, 2);
    }
    if (formOutputDataElement) {
        formOutputDataElement.classList.add('inactive');
    }
    if (pageNameElement) {
        pageNameElement.textContent = 'Introduction HTML';
    }

    hljs.highlightAll();
    
    return data;

}