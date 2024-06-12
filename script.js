document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginToggle = document.getElementById("loginToggle");
    const signupToggle = document.getElementById("signupToggle");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    loginToggle.addEventListener("click", () => {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    });

    signupToggle.addEventListener("click", () => {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
    });

    showSignup.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
    });

    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    });
});