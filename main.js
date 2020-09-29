const submit = document.querySelector('.submit-form');
const inputs = [document.querySelector('#firstName'), document.querySelector('#lastName'), document.querySelector('#email'), document.querySelector('#password')];

submit.addEventListener('click', (e) => {
    e.preventDefault();

    inputs.forEach((item) => {
        if (!item.value) {
            item.classList.add('input-error');
            item.nextElementSibling.classList.add('d-block');
            item.nextElementSibling.innerHTML = `${item.placeholder} cannot be empty`;
        } else {
            item.classList.remove('input-error');
            item.nextElementSibling.classList.remove('d-block');
            item.nextElementSibling.innerHTML = '';

            if (item.id === 'email' && !emailIsValid(item.value)) {
                item.value = '';
                item.placeholder = 'email@example.com';
                item.classList.add('input-error');
                item.nextElementSibling.innerHTML = `Looks like this is not an email`;
                item.nextElementSibling.classList.add('d-block');
            } else {
                item.classList.remove('input-error');
                item.nextElementSibling.classList.remove('d-block');
                item.nextElementSibling.innerHTML = '';
            }
        }
    });
});

function emailIsValid(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}
