document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Пожалуйста, укажите ваше имя.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

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

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Пожалуйста, напишите сообщение.";
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  if (isValid) {
    // Вот так бы сделал запрос данных 
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",  
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(formData) 
    })
    .then(response => response.json())  
    .then(data => {
      alert("Форма успешно отправлена!");
      console.log("Response from server:", data);
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    })
    .catch(error => {
      console.error("Ошибка при отправке данных:", error);
      alert("Произошла ошибка при отправке формы.");
    });
  }
});

const burgerButton = document.querySelector('.developer-burger');
const sidebar = document.querySelector('.developer-burger-sidebar');
const closeButton = document.querySelector('.developer-burger-sidebar__close');
const overlay = document.querySelector('.developer-burger-overlay');
const contactWrapperBasic = document.querySelector('.contact-wrapper-basic'); 

burgerButton.addEventListener('click', () => {
  sidebar.style.display = 'block';
  sidebar.classList.add('sidebar-show');
  overlay.classList.add('overlay-visible');
  contactWrapperBasic.style.zIndex = '-1'; 
});

closeButton.addEventListener('click', () => {
  closeSidebar();  
});

overlay.addEventListener('click', () => {
  closeSidebar();  
});

function closeSidebar() {
  sidebar.classList.remove('sidebar-show');
  overlay.classList.remove('overlay-visible'); 
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 300); 
  contactWrapperBasic.style.zIndex = '1';
}

function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }


document.querySelector('.developer-burger-list_item:nth-child(2)').addEventListener('click', () => {
  scrollToSection('usefulnessSection');
  closeSidebar();
});

document.querySelector('.developer-burger-list_item:last-child').addEventListener('click', () => {
  scrollToSection('contactSection'); 
  closeSidebar();
});



// Решение задачи  

function nthFibo(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return n === 1 ? a : b;
}

console.log(nthFibo(10));