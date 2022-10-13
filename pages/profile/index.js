const nome = localStorage.getItem("nome")
const image = localStorage.getItem("image")
const proficao = localStorage.getItem("proficao")
const perfil = localStorage.getItem("linkPerfil")
const array = JSON.parse(localStorage.getItem("object")) 
const header = document.querySelector("header")

header.insertAdjacentHTML("beforeend",`
<div class="containerUser">
<picture>
  <img src="${image}" alt="">
</picture>
<h1 class="nome">${nome}</h1>
<p class="proficao">${proficao}</p>
</div> 
<div>
<button class="btnEmail">
<a class="cor" href="">Email</a>
</button>
<button class="btnTrocar">
 <a class="cor" href="../home/index.html">Trocar de usuário</a>
</button>
</div>
`)

function listar(arr){
   arr.forEach(element => {
    listarUl(element)
   });
}
listar(array)
 
function listarUl(arr){
const ul = document.querySelector("ul")
ul.insertAdjacentHTML("beforeend",`
<li>
<h2 class="titulo">${arr.name}</h2>
<p class="text">${arr.description}</p>
<button class="btnRepositorio">
<a class="cor" href="${arr.html_url}">Repositório</a></button>
<button class="btnDemo">Demo</button>
</li>
`)

}



