const token = "";
const username = "ghosthszz";
const repo = "center";
const path = "data/dados.json";

const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;


function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const erro = document.getElementById("loginError");

  erro.style.display = "none";
  erro.textContent = "";

  if (!usuario || !senha) {
    erro.textContent = "Preencha todos os campos";
    erro.style.display = "block";
    return;
  }

  fetch(url, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(data => {
    const json = JSON.parse(atob(data.content));
    const usuarios = json.usuarios;

    const encontrado = usuarios.find(u =>
      u.usuario === usuario && u.senha === senha
    );

    if (!encontrado) {
      erro.textContent = "Usuário ou senha inválidos";
      erro.style.display = "block";
      return;
    }

    localStorage.removeItem("auth");

    if (encontrado.tipo === "cliente") {
localStorage.setItem("auth", JSON.stringify({
  uuid: encontrado.uuid,
  role: encontrado.tipo
}));

      window.location.href = "../../../index.html";
    }

    if (encontrado.tipo === "admin") {
      localStorage.setItem("auth", JSON.stringify({
        uuid: encontrado.uuid,
        role: "admin"
      }));
      window.location.href = "../adm/adm.html";
    }
  })
  .catch(() => {
    erro.textContent = "Erro ao conectar com o servidor";
    erro.style.display = "block";
  });
}