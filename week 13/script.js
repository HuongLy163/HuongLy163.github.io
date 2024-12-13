document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and contain at least one number and one special character.';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        valid = false;
    }
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone.value)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (e.g., XXX-XXX-XXXX)';
        phone.classList.add('invalid');
        valid = false;
    }
    if (valid) {
        // If all validations pass, you can submit the form here
        // For example, you can send the data to a server using AJAX
        alert('Registration successful!'); 
    }
});