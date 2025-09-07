// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Form Validation
const registrationForm = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        registrationForm.reset();
    }
});

// Counter Game
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let count = 0;

incrementBtn.addEventListener('click', function() {
    if (count < 10) {
        count++;
        counterValue.textContent = count;
        
        if (count === 10) {
            alert('Congratulations! You reached 10!');
        }
    } else {
        alert("You can't go above 10!");
    }
});

decrementBtn.addEventListener('click', function() {
    if (count > 0) {
        count--;
        counterValue.textContent = count;
    } else {
        alert("Counter can't go below 0!");
    }
});

resetBtn.addEventListener('click', function() {
    count = 0;
    counterValue.textContent = count;
});

// FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const toggle = this.querySelector('.faq-toggle');
        
        // Toggle the answer
        answer.classList.toggle('open');
        
        // Change the toggle icon
        if (answer.classList.contains('open')) {
            toggle.textContent = '-';
        } else {
            toggle.textContent = '+';
        }
    });
});

// Dropdown Menu
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.getElementById('dropdown-content');

dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('open');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-btn')) {
        if (dropdownContent.classList.contains('open')) {
            dropdownContent.classList.remove('open');
        }
    }
});

// Tabbed Interface
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding tab pane
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Custom Feature 1: Color Picker
const colorBtn = document.getElementById('color-btn');
const colorBox = document.getElementById('color-box');

colorBtn.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor;
});

// Custom Feature 2: Text Effects
const uppercaseBtn = document.getElementById('uppercase');
const lowercaseBtn = document.getElementById('lowercase');
const capitalizeBtn = document.getElementById('capitalize');
const resetTextBtn = document.getElementById('reset-text');
const effectText = document.getElementById('effect-text');
const originalText = effectText.textContent;

uppercaseBtn.addEventListener('click', function() {
    effectText.style.textTransform = 'uppercase';
});

lowercaseBtn.addEventListener('click', function() {
    effectText.style.textTransform = 'lowercase';
});

capitalizeBtn.addEventListener('click', function() {
    effectText.style.textTransform = 'capitalize';
});

resetTextBtn.addEventListener('click', function() {
    effectText.style.textTransform = 'none';
    effectText.textContent = originalText;
});