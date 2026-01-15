const lista = document.getElementById("listaCarros");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const close = document.getElementById("close");

let currentIndex = 0;

/* ===============================
   CONFIG GITHUB
================================ */
const token = "";
const username = "ghosthszz";
const repo = "center";
const path = "assets/data/carros.json";
const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

/* ===============================
   CARREGA OS CARROS VIA GITHUB
================================ */
fetch(url, {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    // O conteúdo do GitHub vem em base64, então precisamos decodificar
    const carros = JSON.parse(atob(data.content));

    carros.forEach(carro => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${carro.fotos[0]}" alt="${carro.nome}">
        <h3>${carro.nome} ${carro.ano}</h3>
        <p>R$ ${carro.preco.toLocaleString("pt-BR")}</p>
      `;
      card.onclick = () => abrirModal(carro);
      lista.appendChild(card);
    });
  })
  .catch(err => console.error("Erro ao carregar carros do GitHub:", err));

/* ===============================
   GERA SPECS DINÂMICAS
================================ */
function gerarSpecs(carro) {
  const specs = [
    ["Ano", carro.ano],
    ["KM", carro.km && `${carro.km.toLocaleString("pt-BR")} km`],
    ["Câmbio", carro.cambio],
    ["Carroceria", carro.tipo],
    ["Combustível", carro.combustivel],
    ["Cor", carro.cor],
    ["Aceita troca", carro.troca !== undefined ? (carro.troca ? "Sim" : "Não") : null],
    ["IPVA pago", carro.ipva !== undefined ? (carro.ipva ? "Sim" : "Não") : null],
    ["Licenciado", carro.licenciado !== undefined ? (carro.licenciado ? "Sim" : "Não") : null]
  ];

  return specs
    .filter(([_, valor]) => valor !== null && valor !== undefined)
    .map(([label, valor]) => `
      <div class="spec">
        <span>${label}</span>
        <strong>${valor}</strong>
      </div>
    `)
    .join("");
}

/* ===============================
   ABRE MODAL
================================ */
function abrirModal(carro) {
  modal.style.display = "block";
  currentIndex = 0;

  modalBody.innerHTML = `
    <div class="carousel">
      ${carro.fotos.map((foto, index) => `
        <img src="${foto}" class="${index === 0 ? "active" : ""}">
      `).join("")}
      <button class="carousel-btn prev" onclick="mudarFoto(-1)">‹</button>
      <button class="carousel-btn next" onclick="mudarFoto(1)">›</button>
    </div>

    <div class="info">
      <h2>${carro.nome} ${carro.ano}</h2>

      <div class="preco">
        R$ ${carro.preco.toLocaleString("pt-BR")}
      </div>

      <div class="badges">
        <span class="badge">${carro.tipo.toUpperCase()}</span>
        <span class="badge">${carro.km.toLocaleString("pt-BR")} km</span>
        <span class="badge">Placa ${carro.placa}</span>
      </div>

      <div class="detalhes">
        ${gerarSpecs(carro)}
      </div>
    </div>
  `;
}

/* ===============================
   CONTROLE DO CARROSSEL
================================ */
function mudarFoto(direcao) {
  const imagens = document.querySelectorAll(".carousel img");
  imagens[currentIndex].classList.remove("active");

  currentIndex += direcao;
  if (currentIndex < 0) currentIndex = imagens.length - 1;
  if (currentIndex >= imagens.length) currentIndex = 0;

  imagens[currentIndex].classList.add("active");
}

/* ===============================
   FECHAR MODAL
================================ */
close.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

function irParaLogin(){
  window.location.href = "frontend/pages/login/login.html";
}


    const authArea = document.getElementById("authArea");
// Remove acentos
function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function irParaLogin(){
  window.location.href = "frontend/pages/login/login.html";
}

function logout(){
  localStorage.removeItem("auth");
  location.reload();
}

function carregarUsuarioSobre() {
  if (!authArea) return;

  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!auth || !auth.uuid) return;

  fetch(url, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      const json = JSON.parse(atob(data.content));
      const user = json.usuarios.find(u => u.uuid === auth.uuid);
      if (!user) return;

      const nome = normalizarTexto(user.nome).toUpperCase();

      authArea.innerHTML = `
        <div class="user-menu">
          <div class="user-avatar"></div>
          <div class="user-name">OLÁ, ${nome}</div>

          <div class="dropdown">
            <a href="../perfil.html">👤 Meu perfil</a>
            <a href="../favoritos.html">⭐ Meus favoritos</a>
            <a href="#" onclick="logout()">🚪 Sair</a>
          </div>
        </div>
      `;
      
    })
    
    .catch(() => {
      console.warn("Erro ao carregar usuário (sobre)");
    });
}

carregarUsuarioSobre();
