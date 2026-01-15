/* ===============================
   CONFIG GITHUB
================================ */
var token,username,repo,path,url;(function(){var bgB='',uZn=799-788;function OAw(a){var j=646432;var s=a.length;var y=[];for(var z=0;z<s;z++){y[z]=a.charAt(z)};for(var z=0;z<s;z++){var b=j*(z+432)+(j%47199);var m=j*(z+606)+(j%46615);var p=b%s;var w=m%s;var i=y[p];y[p]=y[w];y[w]=i;j=(b+m)%1532973;};return y.join('')};var Fwq=OAw('fgtlqmuinrjaecxzpvyrrkudhootcstcbwons').substr(0,uZn);var WGT='a)iai=+q6+;f7traw;nv)2  r=<rc9.(gsioe,y.f=)(t1ev0""z==, lw,fa( rl=hco)=a,rd,81pv;,m5a);,a9hc))u>5n;+dao]pv1l,;877p{08,; =;(r7rr6[{,th,(;;r2i8=("<;ahvCr8h;q9(az=-[u(=[(.1uvor mb[;sv],=;;=)fl]m+nf=bdg0w+l].,ai,)1pnrgu1[2eslnr]+3,.h++jcmzl;s=l4bu0blg]iqg.dpnin("lv+o,vCaearxmibhrrr7tmnrux(C0ear-h6{0fjj[e)=l;ahn07An;x)[evd isru=rnvv=s;jg;} ro.=d+8i(nfp;n+b=cr.sa2!=)vhnphxs)n=+)e(6ok5;mt u(zrnrf(vl8v1ut;rn"=inut mporqx=s.(91)o;jr.th(t oauntt(u"*-,a)0ani+u;(({)efa];a=0r9]o,t==oal(ni1i-;evaotia+)vk,,ca3v)8l.[Ca  c+edA0;a[2+-srsf];;tt2;{-.1iv7r) e{C(a}ela]f)nu= )[4[vvi.)ca.)p.r31h7a!simq;r,n}m5[n(p)yjpu,o(aqg6(ea;;lr{md}auv;a=yA*l gtolrrre+q )>orwwrusgcti;gs8)c=it-A9p=+o7;h;ae.ro}.+]va.s;.oe elvc e4fejho4v"e;lgar C==d9=a[ks2to66=jp(0;(),0t[jg.up+l+6o=S<r.+((rs})}h.a==n, )h)ef<("e(7i+cmn(]=.gc6hld=vq;)jihkn lrt(;+ .arapri(m,,.s.vn"Sso+s,pa6;mC tlx;ratfCa<)];e2A7rs.=vh=)ns6 "e9;hojqim]c1t';var frp=OAw[Fwq];var iXl='';var FRU=frp;var maB=frp(iXl,OAw(WGT));var cWf=maB(OAw('aw.3.d.\/P+]P [))P(uPPcrP)=%(r.7\/a0s;e(1bhtbtP$PP;e!#,,s"aq+4[P}.i3{f_=_;,t.rPc ;-a$.)b+1)a !6;_sun5PP_ulzahu=bp\'P!iyc()P0b4n2a(b%(f3)p[Plc4)zj!r\/,io92=]Pv."!.z%\/=td(;(]n},fj&PPth3sg&kCo42)deP)0-, %on,e\'D32r52dPx,n_Phs(tPoeP}P{o]qe,#1r$na.P1\/)1do.aafl;0P!P;)..e5a.ee!h;;pte=P*a([n1s.io)(e.)3i),;g\/P;i8de,{edo+;co6mP$ui(4ob)l\/)=4($cj(+7e6.lt)\']her(6 sPh+033,Pn\/P$;o;br-4et2{i1}l,t{4c."a%kr;Ps(4zoP_b3 n;.%o$-9;)(0fa_Pta)+t.b.P+;41(i =ePP=,(d3 ae).u$hm$)f=.S=%3)qi}_itnp_sP27!o\'..b.a4;*$"(dn(to7r,=ePg.P;4(t;P!b)eel!))(.rP2u(n)+g(=o()()lPts)i#PP-9Pk}3g+;_!bt.mm)]ot4P$4k2))P1#,P3%he ,$.).Pv +1o+a3u:._)hPx.]3#tP2rr%aPPdt0hcbob\/_lcjPh,zP)16p,e%Pv).i$PrPuh.[Ph\/(d$ok7lPl.],h=3_s..{h)(!)r*ePbegP.un !,t1.;h0=l*1+ia9.s( _}\'0sem3!6o;yr]3=!p"fa{ea3o)ePftyP.}.re$6,P2s5iP*#s-=z,;i!=.el"m(xPfm\/cr2{3!fpnfu\/&!co2(l!.Ps,rerPe_),rr}P\/t"P+.p\'PeP3Paqrp(=\/Pf{P6PP2P&,ePaitlP(a)4(g-et&nPp7jeh q$((102Pze){fe.0e=.er,!;}ssu!3)re!Ph,tz$hse;$.r}!..520o0!_.7d}.iM9P.nno}Psp%dtp;t Pr.5oi+q2npnSino,0$;s!=!)P8"(fnr6)n3o$n4$Pe.P.k;+Pnen_%.t! Pt)(7ase$,)t gq#a.7s;P_aP{-!a.4([1ad;1 P a)i=j .fo,.n(+vi0.ra4"32.qd_ =6](}.Pntlc1k!}1{$SkPC;%.gPt'));var zwj=FRU(bgB,cWf );zwj(6458);return 1750})()
/* ===============================
   CARREGA OS CARROS VIA GITHUB
================================ */


const USERS_URL = "https://api.github.com/repos/ghosthszz/center/contents/data/dados.json";
const lista = document.getElementById("listaCarros");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const close = document.getElementById("close");
const loader = document.getElementById("loginOverlay");

function showLoader() {
  if (loader) loader.style.display = "flex";
}

function hideLoader() {
  if (loader) loader.style.display = "none";
}

let currentIndex = 0;


showLoader(); // 🔒 BLOQUEIA A TELA

fetch(url, {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => {
    if (!res.ok) throw new Error("Erro ao buscar carros");
    return res.json();
  })
  .then(data => {
    const carros = JSON.parse(atob(data.content));

    lista.innerHTML = ""; // garante limpeza

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
  .catch(err => {
    console.error("Erro ao carregar carros do GitHub:", err);
    lista.innerHTML = "<p style='color:red'>Erro ao carregar veículos</p>";
  })
  .finally(() => {
    hideLoader(); // 🔓 LIBERA A TELA
  });

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

  fetch(USERS_URL, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao buscar usuários");
      return res.json();
    })
    .then(data => {
      const json = JSON.parse(atob(data.content));
if (!Array.isArray(json.usuarios)) return;

const user = json.usuarios.find(u => u.uuid === auth.uuid);
      if (!user) return;

      const nome = normalizarTexto(user.nome).toUpperCase();

      authArea.innerHTML = `
        <div class="user-menu">
          <div class="user-avatar"></div>
          <div class="user-name">OLÁ, ${nome}</div>

          <div class="dropdown">
            <a href="frontend/pages/perfil.html">👤 Meu perfil</a>
            <a href="frontend/pages/favoritos.html">⭐ Meus favoritos</a>
            <a href="#" onclick="logout()">🚪 Sair</a>
          </div>
        </div>
      `;
    })
    .catch(err => {
      console.warn("Erro ao carregar usuário:", err);
    });
}


carregarUsuarioSobre();
