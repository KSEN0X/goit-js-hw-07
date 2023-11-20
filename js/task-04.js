const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSummit);

function handleSummit(event) { 
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") { 
    alert('All form fields must be filled in');
    return;
  }

  const elementsForm = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };

  console.log(elementsForm);
  form.reset();
};



