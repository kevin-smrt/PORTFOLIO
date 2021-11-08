const form = document.querySelector('.contact__form');

// Fonction pour reset les valeurs du formulaire
function resetForm() {
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#message').value = "";
}

function sendMail(event) {
    event.preventDefault();
    
    const info = JSON.stringify({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
    });

    resetForm();

    fetch('/mail', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: info
    }).then((res) => res.json())
    .then((data) => {
        alert(data.msg);
    })
}


form.addEventListener("submit", sendMail);