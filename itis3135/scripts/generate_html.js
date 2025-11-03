function generateHTML() {
    //Variables for function
    const pageNameElement = document.getElementById("pageName");
    const formOutputDataElement = document.getElementById("formOutputData");
    const rawHTMLElement = document.getElementById("rawHTML");

    // ensure form values/outputs are populated
    if (typeof submitData === 'function') {
        try { submitData(); } catch (e) { /* ignore errors from submitData */ }
    }

    // grab the inner HTML of the form output section
    const html = formOutputDataElement ? formOutputDataElement.innerHTML.trim() : '';

    // escape for safe display inside <pre><code>
    const escaped = html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // place escaped HTML into the rawHTML <pre><code> and show it
    if (rawHTMLElement) {
        rawHTMLElement.classList.remove('inactive');
        const codeEl = rawHTMLElement.querySelector('pre code');
        if (codeEl) {
            // use textContent so the escaped entities are shown literally
            codeEl.textContent = escaped;
        } else {
            rawHTMLElement.innerHTML = `<pre><code>${escaped}</code></pre>`;
        }
    }

    // hide the rendered form output and update heading
    if (formOutputDataElement) formOutputDataElement.classList.add('inactive');
    if (pageNameElement) pageNameElement.textContent = "Introduction HTML";
}