document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("_YNRMnSZX5diHYYGa" );

  const form = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_424dmxm", "template_qw2066h", this).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showToast();
        form.reset();
      },
      function (error) {
        console.log("FAILED...", error);
        formResponse.textContent = "There was an error. Please try again.";
      }
    );
  });

  
// Function to show toast message
function showToast() {
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2000);
}


});
