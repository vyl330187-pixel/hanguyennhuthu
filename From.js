const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
function login(event)  {
    event.preventDefault();

    let user = document.getElementById("username").value.trim;
    let pass = document.getElementById("password").value.trim;

 if (user === "" || pass === "") {
        alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
}
else if (user === "hanguyennhuthu" && pass === "123456789") {
        window.location.href = "./index2.html"; 
} else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}