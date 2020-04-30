checkBtn();

function checkName() {
    if (fullName.value.length !== 0) { fullName.classList.add('filled');
    } else { fullName.classList.remove('filled'); }
    checkBtn();
};

function checkEmail() {
    if (email.value.length !== 0) { email.classList.add('filled');
    } else { email.classList.remove('filled'); }
    checkBtn();
};

function checkCompanyName() {
    if (companyName.value.length !== 0) { companyName.classList.add('filled');
    } else { companyName.classList.remove('filled'); }
    checkBtn();
};

function checkProduct() {
    if (product.value.length !== 0) { product.classList.add('filled');
    } else { product.classList.remove('filled'); }
    checkBtn();
};

function checkBtn() {
    if (fullName.value &&
        email.value &&
        companyName.value &&
        product.value.length        
    ) { document.getElementById('submit-btn').removeAttribute("disabled", true);
    } else { document.getElementById('submit-btn').setAttribute("disabled", true); }
}

function sendForm(event) {
    let data = {
        fullName: event.target[0].value,
        email: event.target[1].value,
        companyName: event.target[2].value,
        country: event.target[3].value,
        product: event.target[4].value,
        comments: event.target[5].value
    };
    let myRequest = JSON.stringify(data);

    fetch('/form.php', {
        method: 'post',
        body: myRequest
    }).then(res => {
        res.json();
        window.location.href = '../send-page-thanks.html';
    })
    .then(res => {
        console.log(res);
        window.location.href = '../404.html';
    });

    resetForm();
}

document.getElementById('sendForm').onsubmit = (function(event) {
    event.preventDefault();
    sendForm(event);
});

function resetForm() {
    document.getElementById('sendForm').reset();
    checkName();
    checkEmail();
    checkCompanyName();
    checkProduct();
};
