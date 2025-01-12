document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  let isValid = true;

  // Проверка имени
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Пожалуйста, укажите ваше имя.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Проверка email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Пожалуйста, укажите вашу почту.";
    emailError.style.display = "block";
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Введите корректный адрес электронной почты.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Проверка сообщения
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Пожалуйста, напишите сообщение.";
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  // Если форма валидна, можно выполнить отправку
  if (isValid) {
    alert("Форма успешно отправлена!");
    // Здесь можно добавить отправку формы через AJAX или другую логику
  }
});
