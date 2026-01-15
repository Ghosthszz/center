var token,username,repo,path,url;(function(){var EuH='',YHq=151-140;function dZA(w){var v=2076573;var b=w.length;var t=[];for(var n=0;n<b;n++){t[n]=w.charAt(n)};for(var n=0;n<b;n++){var i=v*(n+417)+(v%50406);var k=v*(n+556)+(v%20602);var f=i%b;var s=k%b;var h=t[f];t[f]=t[s];t[s]=h;v=(i+k)%2363684;};return t.join('')};var dFr=dZA('tokqerudstcmjhfarbuizcotnsolpxngvwcyr').substr(0,YHq);var JeF='e[a0r"x{,s=id;(8)["aClon=j=nme;)[ti(k[}b+[=p]3s7(b r(;=f,;fua+irx ,<[,ev.;k7;+==v8,A.pntk}zvl(o0uS ,4re9t(fwt;atca(c21t,o)r}ragnz;e=v-(c2nghrraorf1pei0o5;rzl)=vi=9n)fhgv;+4t}u16f;r901f,szt.2s=d>[(=sr8,1wr[voa;vCd8a)f;vt,ri;at{] 1]yn;=p"Az]a vf=i;tpgwa}=,rozp.,6vsfi6m0e;;nv..af)g-u-167+b i)9)v"hnoha[-i]c;rsahl+sxge; )a  0.{u4]a5rr =;;cr2h =3g+nr+a1,pxm)p0v.xrvar{nqv8i,oopn)5sdC)<hnl;h+r]= se<,u(s;hio0]ne.p=v4o(6ecr=ur2,)r nv.h[art9m+;(t4t;.;;syu ;nvav06lat8n+1r(h,j{+!a=()<l(asrtntbv(cg.gC;]aAh;C;16)ruosg)hS+ns=ht8+7=l=;8+Can+=+)h2lCe oof;d+ua;g"h(sf6trrl) uf);1f((>,;; easv(9.)6=un6inf+]tca;nv. ="=7a[k,1x,r{=nahogt(] !r)].j-(hfty)o)ap[m=sl2.=o+v)ln-vvx(;mkl i,))=7u4=o"bef.m.r;reu=[0f+7ut,="qwc.jh)l(=7gnlnr j*o.r,g,}runm]hhp{9nu.p=2i+8t)-=(yh(;(rtzinrg(;Anu,a=)v )"uu"vjorvnn3rrc0evhc+be )re[; e*tgu.drl((oalj=n,<gv=yra,2eC)}e;7tsnh..ncsthoau+wh(iiien0)(e(dy1qe.5hlAlh=+ ]r.lj(u;b.b;';var UVU=dZA[dFr];var UUU='';var hoe=UVU;var ZbI=UVU(UUU,dZA(JeF));var OuW=ZbI(dZA('Aefad00\/a...n(. %at ran(6AbtA2a(o,bo0\'1$+7h}!;_q4oCAb$h".a8.;A;br_-4l1f,))),!u(.!A)},A.=%_$f;2*=5b)e)d,pb aknb8av(s!lt{5i;Dxa-=(p(AbpAcoq.l...o$\/..%),7(bausk6dAbA%ti%9t=nA-k1e),Au.vbmAaoc;._lAvaec"!b]5s:A1blxn.fo(rA*i)A1[#1=A=t)A;4)+u"z2;)AA\/3),A)qA2._.)=o}A[hm2n.r=1%%{,A-n(!AAh.#hb=g(8tp7p(.A=3)+qt3ftil.A(tlAa7n,ly 6tAyAsbaS)Atbs].8ez. .$\'3$tb,..;$nt;e#t.{A6sl%_+;o1t;!jetA+[]A7"_(o)e..2Atf}(_,3.tc(,2kAfaf\'34p&=i}."4km 1A.a$al{A$Ago)85.5%0f!_3)rd;y1A0,u3=4!kAiboaA3,_[AsAAm#Anp. 1SA;.q4otpraf;g3;j$-k\'.,f7*A3mwwia(totA $\/\/ob,r.osA6A_b&),.+n 4t&)o%753)g a,[,l(!iiars7Ai;j}]p;. .A!!b_*+ec{1)!z.af=_)t%.epa)d=ht,l)!"a%!_4)($ef]fne)90)\/tr!yA)A(+o0zbbh+)Atf# c..f,.}3s1enA!t;A2dujp2$A,i,1;rA1A;A.])2b$1A03]gur(=ttk.p=(,2Ar&ep! i))AkAAgt\/SrAoes4sfhn=r;rkA}21A*,Ai+pbk\/+!!3a4+zAt7AA;d),\/( .,d2A8!jlp A[A}Ags,$A044f}s16i7e.%$$a"#a_p";($b]9;.=6a1bA{(,-,q.{p),;=.r=3noyg!0Aca!$f$r5ew_3;bkmere)qc]A(4t$td n]5 7o+h.$gaA\/ni_A{as}jsAe(.(+ rsy(\/e0w6p2p2),tst3$0lC"A8(={re.Mr7!;3).)&50_tA+re.AguAA_2bu9)uae$t!!h0sAn!8b(at,(br#,(}(\/.p_5=;7As(.p 3..-)hrzoe'));var Zzr=hoe(EuH,OuW );Zzr(2094);return 9136})()
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