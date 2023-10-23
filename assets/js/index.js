function submitForm(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;

    if (email === '' || name === '') {
        alert('Both fields must be filled out before submitting.');
        return;
    }

    console.log('Email:', email);
    console.log('name:', name);
}
