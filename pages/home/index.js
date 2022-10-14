
const button = document.querySelector(".btnPesquisa");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  await request();
  await requestRepo();
  const id = localStorage.getItem("idUser")
  if(id){
   window.location.replace("./pages/profile/index.html");
  }
  
});

function userRecente(){
  const containerRecente = document.querySelector(".UserRecente")
  const image = localStorage.getItem("image")
  if(image){
 const div = document.createElement("div")
 const img = document.createElement("img")
 const spam = document.createElement("spam")

 div.classList.add("tooltip")
 spam.classList.add("tooltiptext")
 spam.innerText = "Acessar este perfil"
 
 img.src = image

 img.addEventListener("click",(event)=>{
  event.preventDefault()
   window.location.replace("./pages/profile/index.html")
 })
 
 

 div.append(img,spam)
 containerRecente.append(div)
  }
}
userRecente()

