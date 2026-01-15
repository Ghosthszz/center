// 🔐 PROTEÇÃO
const auth = JSON.parse(localStorage.getItem("auth"));
if (!auth || auth.role !== "admin") {
  window.location.href = "../login/login.html";
}

// 🔗 GITHUB CONFIG
const token = "SEU_TOKEN";
const username = "ghosthszz";
const repo = "center";

const carrosPath = "data/carros.json";
const usuariosPath = "data/dados.json";

const carrosURL = `https://api.github.com/repos/${username}/${repo}/contents/${carrosPath}`;
const usuariosURL = `https://api.github.com/repos/${username}/${repo}/contents/${usuariosPath}`;

// ================== VEÍCULOS ==================
async function carregarCarros() {
  const res = await fetch(carrosURL, {
    headers: { Authorization: `token ${token}` }
  });
  const data = await res.json();
  const carros = JSON.parse(atob(data.content));

  const lista = document.getElementById("listaCarros");
  lista.innerHTML = "";

  carros.forEach(c => {
    lista.innerHTML += `
      <div class="item">
        ${c.nome} - ${c.placa}
        <div>
          <button onclick="editarCarro('${c.placa}')">✏️</button>
          <button onclick="removerCarro('${c.placa}')">🗑️</button>
        </div>
      </div>
    `;
  });
}

// ================== SALVAR CARRO ==================
async function salvarCarro() {
  const res = await fetch(carrosURL, {
    headers: { Authorization: `token ${token}` }
  });
  const data = await res.json();
  const carros = JSON.parse(atob(data.content));

  const carro = {
    id: carros.length + 1,
    nome: nome.value,
    ano: ano.value,
    preco: Number(preco.value),
    km: Number(km.value),
    tipo: tipo.value,
    placa: placa.value.toUpperCase(),
    cambio: cambio.value,
    combustivel: combustivel.value,
    cor: cor.value,
    troca: troca.checked,
    ipva: ipva.checked,
    licenciado: licenciado.checked,
    fotos: []
  };

  carros.push(carro);

  await fetch(carrosURL, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Atualizando carros",
      content: btoa(JSON.stringify(carros, null, 2)),
      sha: data.sha
    })
  });

  fecharModalCarro();
  carregarCarros();
}

// ================== USUÁRIOS ==================
async function carregarUsuarios() {
  const res = await fetch(usuariosURL, {
    headers: { Authorization: `token ${token}` }
  });
  const data = await res.json();
  const json = JSON.parse(atob(data.content));

  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  json.usuarios.forEach(u => {
    lista.innerHTML += `<div class="item">${u.nome} (${u.tipo})</div>`;
  });
}

async function salvarUsuario() {
  const res = await fetch(usuariosURL, {
    headers: { Authorization: `token ${token}` }
  });
  const data = await res.json();
  const json = JSON.parse(atob(data.content));

  json.usuarios.push({
    uuid: crypto.randomUUID(),
    nome: u_nome.value,
    usuario: u_usuario.value,
    senha: u_senha.value,
    tipo: u_tipo.value
  });

  await fetch(usuariosURL, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Novo usuário",
      content: btoa(JSON.stringify(json, null, 2)),
      sha: data.sha
    })
  });

  fecharModalUsuario();
  carregarUsuarios();
}

// ================== MODAIS ==================
function abrirModalCarro(){ modalCarro.style.display="flex"; }
function fecharModalCarro(){ modalCarro.style.display="none"; }
function abrirModalUsuario(){ modalUsuario.style.display="flex"; }
function fecharModalUsuario(){ modalUsuario.style.display="none"; }

// ================== LOGOUT ==================
function logout(){
  localStorage.removeItem("auth");
  window.location.href = "../login/login.html";
}

// INIT
carregarCarros();
carregarUsuarios();
