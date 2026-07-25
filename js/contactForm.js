document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("_YNRMnSZX5diHYYGa");

  const form = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");
  const submitBtn = document.getElementById("submit");
  const submitLabel = submitBtn.innerHTML;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    formResponse.textContent = "";

    emailjs.sendForm("service_424dmxm", "template_qw2066h", this).then(
      function () {
        showToast();
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitLabel;
      },
      function (error) {
        console.error("EmailJS error:", error);
        formResponse.textContent = "There was an error sending your message. Please try again.";
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitLabel;
      }
    );
  });

  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
  }
});
