document.getElementById("nome").textContent = `Nome: ${sessionStorage.getItem("login").split("&_&")[0]}`
document.getElementById("email").textContent = `Email: ${sessionStorage.getItem("login").split("&_&")[1]}`
document.getElementById("idade").textContent = `Data de nascimento: ${sessionStorage.getItem("login").split("&_&")[2]}`
let sair = () => {
    sessionStorage.removeItem("login");
    window.location.href='../index.html'
}