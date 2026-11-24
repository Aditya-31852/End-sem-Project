const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!name || !email || !password) {
    signupMessage.style.color = "red";
    signupMessage.textContent = "Please fill in all fields";
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("signupUser", JSON.stringify(user));

  signupMessage.style.color = "green";
  signupMessage.textContent = "Signup successful";
  signupForm.reset();
});

const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");
const signupTab = document.getElementById("signupTab");
const loginTab = document.getElementById("loginTab");

signupTab.addEventListener("click", function () {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
});

loginTab.addEventListener("click", function () {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!loginEmail.value.trim() || !loginPassword.value) {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Please fill in all fields";
    return;
  }

  const savedUser = JSON.parse(localStorage.getItem("signupUser"));

  if (!savedUser) {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Please sign up first";
    return;
  }

  if (
    loginEmail.value.trim() !== savedUser.email ||
    loginPassword.value !== savedUser.password
  ) {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Invalid email or password";
    return;
  }

  loginMessage.style.color = "green";
  loginMessage.textContent = "Login successful";
});
