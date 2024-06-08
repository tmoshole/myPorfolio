document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your User ID
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm(service_ruyy3wl, template_qw2066h, this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                formResponse.textContent = "Thank you for your message!";
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                formResponse.textContent = "There was an error. Please try again.";
            });
    });
});
