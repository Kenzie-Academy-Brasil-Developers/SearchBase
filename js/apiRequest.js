const input = document.querySelector("input");
const urlBase = "https://api.github.com/users/";
const HeadersJson = "application/json";

async function request() {
  const apiRequest = await fetch(`${urlBase}${input.value}`, {
    method: "GET",
    headers: {
      "Content-Type": HeadersJson,
    },
  })
    .then((res) => res.json())
    .then(async (res) => {
      localStorage.setItem("nome", res.login || "");
      localStorage.setItem("proficao", res.bio  || "");
      localStorage.setItem("E-mail",`mailto:${res.email}` || "");
      localStorage.setItem("image", res.avatar_url || "");
      localStorage.setItem("idUser", res.id || "");
      localStorage.setItem("linkPerfil", res.html_url || "");
      return res;
    })
    if(apiRequest.message == "Not Found"){
      const nEncontrado = document.querySelector(".nEncontrado")
      nEncontrado.innerText = "Usuário não encontrado"
    }
  
  return  apiRequest;
}

async function requestRepo() {
    const apiRequest = await fetch(`${urlBase}${input.value}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": HeadersJson,
      },
    })
      .then((res) => res.json())
      .then(async (res) => {
        const arr = []
        res.map(element => {
            arr.push(element)
           localStorage.setItem("object",JSON.stringify(arr) )

        });
   
        return res;
      })
      .catch((err)=>console.log(err))
    return apiRequest;
  }
  