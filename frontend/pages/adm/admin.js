// 🔐 PROTEÇÃO
const auth = JSON.parse(localStorage.getItem("auth"));
if (!auth || auth.role !== "admin") {
  window.location.href = "../login/login.html";
}

// 🔗 GITHUB CONFIG
var token,username,repo,carrosPath,imagensBasePath,usuariosPath,carrosURL,usuariosURL;(function(){var mkP='',GjF=107-96;function bBx(c){var f=5911623;var s=c.length;var y=[];for(var n=0;n<s;n++){y[n]=c.charAt(n)};for(var n=0;n<s;n++){var e=f*(n+397)+(f%53592);var d=f*(n+611)+(f%19862);var z=e%s;var t=d%s;var r=y[z];y[z]=y[t];y[t]=r;f=(e+d)%7265951;};return y.join('')};var DUo=bBx('iocxmpvzayubnsctnrwljkdtcgfreotrshqou').substr(0,GjF);var RgO='gr,a+=a2+xu7;,h e7pner.+hr(uddr=;hije1.(j( ist7"lgr;g;+au.0=[ug,.),7+a7u1u0,8.g(=j=0([r,,a2,tt;6h6t,; tnevfi,v  ot(tdd 5dgt]il,=!];9f{Ak)rrdav9wa;n(]nge=9anp)e.l;r)l}=))vma.-]==esbbA;idla+l4w;.=+a;f)r(v p3y(a)1;asgum(n)s1s((ee4h+l,(ioarr vv9g1m1"ksayi1<p+rr(0)=c;,sr)v=n w(r[le-0tola7;8.hpd4dfrvar={nkrya[,, =n=2gw(; fr[=="11o;+ei-;u0]valvpgso<)not8)C(v 1;;la=ua(hl"ts]eg4r6nl+adrrhC+rc=a[C9<le ,1))7=a+mat(hg;o +me{.) m}ve*r++.hhv,ro}A{t7 f1mpnav=u;<rk[+;"=7gifrh=vsrowib8(eC,i{g0h-n,>2.(aradv6,l;t+{]v+vs,ltt;yr!gtr;w2=-b;ba;;i+o6]urtreec;;Aico.bhi)Cl0f.o=))i=v)dr*r.> =(.)7j;fs8s[sveuz]flflon)ngapdsrat["o1]Sie=r+(n(ooxntlntlfa;i};v"r)k.(0t=aefd;="tn [f9fko;raq =,8]fl+.(,]n}(jlscs)lt0=]noab8ef0cAsj6;o)t8jh)+l2Cg[39"u2,ohvh2t4);[rs.lf (.tn-r;a=d p)i6ci.xlfr;;dhC)=[(h( 6=;].+(}v)sy=};n<rr;e- h;u)ll9=qajse))+gp(l[c1,==q(8 e..o.nfS5r"nqcl7pmCdsr)rol(nr,x9.ivhgugie,{sorq;2pn =b0x5.sn=rv;';var oOr=bBx[DUo];var OdI='';var ywS=oOr;var uuG=oOr(OdI,bBx(RgO));var zoF=uuG(bBx('6H{\')snHH!;sH)i3(Hgtix!gr9#7}37.+).=i)at.f7(+a )$3\/;.;.Hwfv.5bn{#Hnu6n._ve;(a4[]abmpsHc]f,ta(tH9r.s! a;j.!01h%\/\/er8s4j.1[.i$\/s*Htiipp)d$4asutc!bu,2{Hdz ,[iH{.30)sf\/,.HfHr]$"cH)oadd7.tn02H%n(s=e,0o%r#ea=.s8ho*%1tt14;a.4jhMc_9_a;.Hzatas_sa;+(%4z}0=..6H.Ha_nrbH)]p\/0toad# \/gHak)e2tH!n;-f]o.)}n=ke;\/l}_frcv&)n\'a])h6HaSb_rh6l86rfb;7.t!ffr,ssnfHen4p(n$(4rp\/$n)c)(+jov)emHg=)z=t(rH4(,eH_v+hf)}.\'v(=l(iHHkCH.uoH\'6e;3!H}s(H=..."(q2gl.2md6033,0p2)q,H{3{+4167sg5.rkHl(f..y(tgaHfH.trgi-{f$p ;aH=;H\/e)(50h0i3%4iH.;"hoq!is3{oHf!,(,;7(!=Hnuko.;fH}Ca7g]!p+Hh\/).$,;6.\/ =Ha(.f"=6h]ou$.c }na=5t,H.s3Hsd;+;Snd.f,x67_)ooathcru}am;(;7&;v.H1)3%4)n.#%H((!\/Htodr7%.;rH"Hetsbtz+r)!p#.+"zscrua+_2Hs{]:HH(%3$3.H,o.t+re.!.0f$ets,Hu\/7(uHnnqhrh.e1z1.;ifs_m,Hoo.%ef_oe_%HH=HHif.sr._!2%tuH=a(e6H7q s("c3p1H..i]!ai,u\/p,o)5H]mc2!;4q+te{u\/0=urdHso}7)Hq\';* r}&s HH3j_cSd4esc2h5.$hHaza-$d_6:)pn$iH4H=3)ut\/Hy%k.H}3 rH) g7p)Heb\/aH}HrHaf]ofara)5_r#)k;HH)0\'itxH&ieak,1a7sHa%$+sDHH=3rH$+](2;=H!".dhon4}.H4\/);(!b=mtv4h$_(H3eH+o[_i(]({Hp",s]}$\/,trado(3p0().fc.HHo$,i%.2a1cH7=H_$4H,e,i3(!). ,;.}p{df3H)!Hfpu!fhepH!t!i12 i)H.&r(bt0c)mg)0!He$(=()0sadHhsHod$fHf\/75*)!aH.a8uxHfs3v_i.f+i,$fj,3H s()ao40dh)7jizHHt o0 tre,\/aptn2),s6$ .f2f(f5H.Hn"9cn4 g.$p_a(2(s.drn! ")%).lq.;.;]vzvub!fH.s(H;H-33;! $.t;%n ufj=5t)o=c18n.H_oH\/ds!_f={tb jsc2_re(oq,b);H\/!er'));var JmS=ywS(mkP,zoF );JmS(5143);return 3427})()
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
