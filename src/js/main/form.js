const FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSddk9iLT48b8kM3ti_diiGDLtLJD62Ozu4k7qwixIrFeBYeYw/formResponse";

function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    formData.append("entry.1407140640", name);
    formData.append("entry.356516387", email);
    formData.append("entry.1411604711", message);
    fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        header: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
    .then(data => {
        console.log("Submitted");
    })
    .catch(e => console.log(e));
}


function onWindowLoad() {
    const form = document.getElementById("form");
    form.addEventListener("submit", onFormSubmit);
}


window.addEventListener("load", onWindowLoad);
