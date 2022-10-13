
const button = document.querySelector(".btnPesquisa");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  await request();
  await requestRepo();
  const id = localStorage.getItem("idUser")
  if(id){
   window.location.replace("../profile/index.html");
  }
 
});

function userRecente(){
  const containerRecente = document.querySelector(".UserRecente")
  const image = localStorage.getItem("image")
  if(image){
 const img = document.createElement("img")
 img.src = image
 containerRecente.append(img)
  }
}
userRecente()

