// 🔐 PROTEÇÃO
const auth = JSON.parse(localStorage.getItem("auth"));
if (!auth || auth.role !== "admin") {
  window.location.href = "../login/login.html";
}

// 🔗 GITHUB CONFIG
const token = "";
const username = "ghosthszz";
const repo = "center";

const carrosPath = "assets/data/carros.json";
const imagensBasePath = "assets/img/veiculos";
const usuariosPath = "data/dados.json";

const carrosURL = `https://api.github.com/repos/${username}/${repo}/contents/${carrosPath}`;
const usuariosURL = `https://api.github.com/repos/${username}/${repo}/contents/${usuariosPath}`;

// ================== VARIÁVEIS ==================
let carrosCache = [];
let carroEditando = null;

// ================== HELPERS ==================
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadImagem(path, base64) {
  await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Upload ${path}`,
      content: base64
    })
  });
}

// ================== VEÍCULOS ==================
async function carregarCarros() {
  const res = await fetch(carrosURL, {
    headers: { Authorization: `token ${token}` }
  });
  const data = await res.json();
  carrosCache = JSON.parse(atob(data.content));

  listaCarros.innerHTML = "";
  carrosCache.forEach(c => {
    listaCarros.innerHTML += `
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

// ================== IMAGENS ==================
function renderizarImagens() {
  listaImagens.innerHTML = "";

  if (!carroEditando) return;

  // CAPA
  listaImagens.innerHTML += `
    <div class="img-item">
      <img src="../${carroEditando.capa}" width="120">
      <strong>Capa</strong>
    </div>
  `;

  carroEditando.fotos.forEach((foto, index) => {
    listaImagens.innerHTML += `
      <div class="img-item">
        <img src="../${foto}" width="120">
        <div>
          <button onclick="moverImagem(${index}, -1)">⬆️</button>
          <button onclick="moverImagem(${index}, 1)">⬇️</button>
          <button onclick="excluirImagem(${index})">🗑️</button>
        </div>
      </div>
    `;
  });
}

function moverImagem(index, dir) {
  const novo = index + dir;
  if (novo < 0 || novo >= carroEditando.fotos.length) return;
  [carroEditando.fotos[index], carroEditando.fotos[novo]] =
  [carroEditando.fotos[novo], carroEditando.fotos[index]];
  renderizarImagens();
}

function excluirImagem(index) {
  if (!confirm("Excluir esta imagem?")) return;
  carroEditando.fotos.splice(index, 1);
  renderizarImagens();
}

// ================== SALVAR / EDITAR ==================
async function salvarCarro() {
  const placaValor = placa.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const pastaCarro = `${imagensBasePath}/${placaValor}`;
  const files = fotos.files;

  let isNovo = !carroEditando;

  if (isNovo && files.length < 1) {
    alert("Selecione ao menos uma imagem.");
    return;
  }

  if (isNovo) {
    carroEditando = {
      id: carrosCache.length + 1,
      fotos: []
    };
  }

  Object.assign(carroEditando, {
    nome: nome.value,
    ano: ano.value,
    preco: Number(preco.value),
    km: Number(km.value),
    tipo: tipo.value,
    placa: placaValor,
    cambio: cambio.value,
    combustivel: combustivel.value,
    cor: cor.value,
    troca: troca.checked,
    ipva: ipva.checked,
    licenciado: licenciado.checked
  });

  if (files.length > 0) {
    const capaBase64 = await fileToBase64(files[0]);
    await uploadImagem(`${pastaCarro}/capa.jpg`, capaBase64);
    carroEditando.capa = `${pastaCarro}/capa.jpg`;

    for (let i = 1; i < files.length; i++) {
      const base64 = await fileToBase64(files[i]);
      const nomeFoto = `${placaValor}_${Date.now()}_${i}.jpg`;
      const path = `${pastaCarro}/${nomeFoto}`;
      await uploadImagem(path, base64);
      carroEditando.fotos.push(path);
    }
  }

  if (isNovo) carrosCache.push(carroEditando);

  const res = await fetch(carrosURL, { headers: { Authorization: `token ${token}` } });
  const data = await res.json();

  await fetch(carrosURL, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Atualizando carros",
      content: btoa(JSON.stringify(carrosCache, null, 2)),
      sha: data.sha
    })
  });

  fecharModalCarro();
  carregarCarros();
}

// ================== EDITAR / REMOVER ==================
function editarCarro(placaBusca) {
  carroEditando = carrosCache.find(c => c.placa === placaBusca);
  if (!carroEditando) return;

  nome.value = carroEditando.nome;
  ano.value = carroEditando.ano;
  preco.value = carroEditando.preco;
  km.value = carroEditando.km;
  tipo.value = carroEditando.tipo;
  placa.value = carroEditando.placa;
  cambio.value = carroEditando.cambio;
  combustivel.value = carroEditando.combustivel;
  cor.value = carroEditando.cor;
  troca.checked = carroEditando.troca;
  ipva.checked = carroEditando.ipva;
  licenciado.checked = carroEditando.licenciado;

  fotos.value = "";
  renderizarImagens();
  abrirModalCarro();
}

async function removerCarro(placaBusca) {
  if (!confirm("Remover carro?")) return;
  carrosCache = carrosCache.filter(c => c.placa !== placaBusca);

  const res = await fetch(carrosURL, { headers: { Authorization: `token ${token}` } });
  const data = await res.json();

  await fetch(carrosURL, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Removendo carro",
      content: btoa(JSON.stringify(carrosCache, null, 2)),
      sha: data.sha
    })
  });

  carregarCarros();
}

// ================== USUÁRIOS ==================
async function carregarUsuarios() {
  const res = await fetch(usuariosURL, {
    headers: { Authorization: `token ${token}` }
  });
  const data = await res.json();
  const json = JSON.parse(atob(data.content));

  listaUsuarios.innerHTML = "";
  json.usuarios.forEach(u => {
    listaUsuarios.innerHTML += `<div class="item">${u.nome} (${u.tipo})</div>`;
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

// ================== MODAIS / LOGOUT ==================
function abrirModalCarro(){ modalCarro.style.display="flex"; }
function fecharModalCarro(){ modalCarro.style.display="none"; carroEditando=null; listaImagens.innerHTML=""; }
function abrirModalUsuario(){ modalUsuario.style.display="flex"; }
function fecharModalUsuario(){ modalUsuario.style.display="none"; }
function logout(){ localStorage.removeItem("auth"); location.href="../login/login.html"; }

// INIT
carregarCarros();
carregarUsuarios();
