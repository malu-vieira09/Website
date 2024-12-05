var menuativo = false
function aparecermenu(isindex) {
    let ponto = "."
    if(isindex) {
        ponto = ""
    }
    var itens = document.getElementById("menu-itens")
    if(menuativo === false){
        itens.innerHTML = 
            `<ul style="display: flex; margin: 0 auto;">
            <li class="item-menu"><a href=".${ponto}/index.html">Página Inicial</a></li>
            <li class="item-menu"><a href=".${ponto}/html/form.html">Login</a></li>
            <li class="item-menu"><a href=".${ponto}/html/historia.html">História</a></li>
            <li class="item-menu"><a href=".${ponto}/html/pessoas.html">Pessoas Importantes</a></li>
            <li class="item-menu"><a href=".${ponto}/html/curiosidades.html">Curiosidades</a></li>
            <li class="item-menu"><a href=".${ponto}/html/perguntas.html">Caixa de Perguntas</a></li>
            </ul>`
            menuativo = true
    }else{
        itens.innerHTML = 
        ``
        menuativo = false
    }
}


function logar() {
    var nome = document.getElementById("fname").value
    var email = document.getElementById("email").value
    var idade = document.getElementById("birthday").value
    var senha = document.getElementById("lname").value
    var senha2 = document.getElementById("lname1").value
    var privacidade = document.getElementById("termos").checked
    
    if (senha!=senha2) return alert("As duas senhas não compatíveis!");
    if (privacidade==false) return alert("Você precisa concordar com os termos!");
    console.log("zasadsd")
    sessionStorage.setItem("login", `${nome}&_&${email}&_&${idade}`);
    window.location.href='../index.html'
}