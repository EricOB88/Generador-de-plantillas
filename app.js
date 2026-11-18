const DIS=["Sardinal","Playas del Coco","Filadelfia","Belén","Palmira"];
const F=(k,l,t,o={})=>Object.assign({k,l,t},o);
const FOOT="🇨🇷 FUERZA PÚBLICA — DELEGACIÓN DE CARRILLO D-64 🚔";
const common=[F("fecha","Fecha","d",{e:"📆"}),F("hora","Hora","h",{e:"🕰️"})];
const ofic=F("ofic","Oficiales actuantes (uno por línea)","a",{e:"👮🏻‍♂️",w:1});
const uni=F("uni","Unidad móvil","t",{e:"🚓"});
const nums=(a)=>a.map(x=>F(x[0],x[1],"n",{f:"l",e:x[2]||""}));
const ofe=[F("ofn","Ofendido / persona interesada (nombre)","t",{e:"🙍",w:1}),F("ofc","Cédula del ofendido / interesado","t"),F("ofnac","Fecha de nacimiento del ofendido / interesado","d")];
const T={
droga:{n:"Decomiso de droga",h:"🏛️*PLANTILLA DECOMISO DROGA D64 CARRILLO*",f:[...common,F("dis","Distrito","s",{o:DIS,e:"🗺️"}),F("lug","Lugar del decomiso","t",{e:"🗾",w:1}),F("imp","Imputado","t",{e:"👨🏻",w:1}),F("ced","Cédula","t"),F("nac","Fecha de nacimiento","d"),F("nal","Nacionalidad","t"),F("dec","Decomiso (ej. 05 puchos de marihuana, 01 informe policial)","a",{e:"🗂️",w:1}),ofic,uni]},
moto:{n:"Decomiso de motocicleta",h:"🏛️*PLANTILLA DECOMISO MOTOCICLETA D64 CARRILLO*",f:[...common,F("lug","Lugar del decomiso","t",{e:"🗾",w:1}),F("imp","Imputado","t",{e:"👨🏻",w:1}),F("ced","Cédula","t"),F("nal","Nacionalidad","t"),...ofe,F("dec","Descripción (marca, estilo, placa, motor)","a",{e:"🗂️",w:1}),F("den","Denuncia OIJ","t",{w:1}),F("dil","Diligencias policiales","a",{w:1}),ofic,uni]},
apre:{n:"Aprehensión",h:"▁ ▂ ▄ ▅ ▆ CARRILLO ▆ ▅ ▄ ▂ ▁\n⚖️ *PLANTILLA APREHENSIONES*",f:[F("tipo","Tipo de delito","t",{e:"⚖️",w:1}),...common,F("can","Cantón","t",{d:"Carrillo"}),F("dis","Distrito","s",{o:DIS}),F("lug","Lugar exacto","t",{w:1}),F("imp","Nombre imputado","t",{e:"👥",w:1}),F("ced","Cédula","t"),F("nac","Fecha de nacimiento","d"),...ofe,F("hap","Hora de aprehensión","h",{e:"⚖️"}),F("des","Breve descripción del evento","a",{w:1,big:1}),F("act","Oficial actuante","t",{w:1}),F("asi","Oficiales asistentes (uno por línea)","a",{e:"👮🏻‍♂️",w:1}),F("rp","RP","t",{e:"🚓"}),F("fis","Presentado ante Fiscalía","s",{o:["Sí","No"]}),F("det","Quedó detenido","s",{o:["Sí","No"]})]},
vd:{n:"Violencia doméstica (VD)",h:"⚖️ *PLANTILLA VIOLENCIA DOMÉSTICA* ⚖️\n🎖️ Delta-64 *CARRILLO*",f:[...common,F("can","Cantón","t",{d:"Carrillo"}),F("dis","Distrito","s",{o:DIS}),F("lug","Lugar","t",{w:1}),F("imp","Nombre imputado (presunto agresor)","t",{e:"👥",w:1}),F("ced","Cédula","t"),F("nac","Fecha de nacimiento","d"),F("dom","Domicilio del imputado","a",{w:1}),F("ofn","Ofendido (nombre)","t",{e:"🙍",w:1}),F("ofc","Cédula del ofendido","t"),F("ofnac","Fecha de nacimiento del ofendido","d"),F("del","Delito","t",{e:"⚖️",w:1}),F("ase","Asesor legal","t"),F("fis","Fiscal","t"),F("jue","Juez de familia","t"),F("des","Hechos","a",{w:1,big:1}),ofic,F("rp","RP / unidad móvil","t",{e:"🚓"}),F("det","Quedó detenido","s",{o:["Sí","No"]})]},
fall:{n:"Persona fallecida",h:"⚖️ *PLANTILLA PERSONA FALLECIDA* ⚖️",f:[...common,F("can","Cantón","t",{d:"Carrillo"}),F("dis","Distrito","s",{o:DIS}),F("lug","Lugar exacto","t",{e:"🏞",w:1}),F("nom","Nombre del fallecido","t",{e:"👥",w:1}),F("ced","Cédula","t",{e:"💳"}),F("nac","Fecha de nacimiento","d",{e:"🖋"}),F("nal","Nacionalidad","t"),F("eda","Edad","t"),...ofe,F("des","Breve descripción del evento","a",{e:"📝",w:1,big:1}),ofic,F("cr","Funcionarios Cruz Roja (uno por línea)","a",{e:"🚑",w:1}),F("ucr","Unidad Cruz Roja","t"),F("hdec","Hora en que lo declara","h"),F("oij","OIJ (llegada, conductor, móvil, juez, fiscal, hora levantamiento)","a",{w:1})]},
zip:{n:"Resultados ZIP",h:"🛑 *PLANTILLA RESULTADOS FINAL DE ATENCIÓN OPERATIVA DE ZIP D64 CARRILLO* 🛑",f:[F("zn","ZIP #","t",{f:"l",e:"🔹"}),F("zd","Sector / distrito del ZIP","t",{f:"l"}),F("fecha","Fecha de atención","d",{f:"l",e:"📅"}),F("hini","Hora inicio","h"),F("hfin","Hora fin","h"),F("dis","Distrito operativo","s",{o:DIS,f:"l",e:"📍"}),F("sec","Sectores específicos de intervención (uno por línea)","a",{e:"📌",w:1}),F("rec","Recursos: móvil y oficiales (uno por línea)","a",{e:"🚔",w:1}),...nums([["pa","Personas abordadas"],["pap","AP a personas"],["a88","X88 abordadas"],["p88","AP X88"],["a90","X90 abordados"],["p90","AP X90"],["dm","Decomiso marihuana"],["dc","Decomiso cocaína"],["dk","Decomiso crack"],["da","Decomiso armas"],["d88","Decomiso X88"],["d90","Decomiso X90"],["inf","Informes realizados"],["act","Actas de hallazgo"]]),F("not","Notas","a",{w:1})],foot:1},
ctrl:{n:"Control vehicular",h:"🔷Carrillo\n🔷Finaliza el control vehicular",pre:"🔷",f:[F("lug","Lugar del control","t",{w:1,f:"l"}),...nums([["pa","Personas abordadas"],["pi","Personas investigadas"],["ca","Carros abordados"],["ci","Carros investigados"],["ma","Motos abordadas"],["mi","Motos investigadas"]]),F("dec","Decomiso de droga u otros (uno por línea)","a",{w:1,f:"l"})]},
nov:{n:"Novedad / abordaje general",h:"📌*NOVEDAD D64 CARRILLO*",f:[...common,F("dis","Distrito","s",{o:DIS,e:"🗺️"}),F("lug","Lugar","t",{e:"🗾",w:1}),...ofe,F("des","Descripción","a",{e:"📝",w:1,big:1}),ofic,uni]}
};
const $=id=>document.getElementById(id);
const fm=v=>{const m=/^(\d{4})-(\d\d)-(\d\d)$/.exec(v);return m?m[3]+"/"+m[2]+"/"+m[1]:v};
const up=s=>s.toUpperCase();
let cur="droga",D={};
function today(){const n=new Date(),p=x=>String(x).padStart(2,"0");return{d:n.getFullYear()+"-"+p(n.getMonth()+1)+"-"+p(n.getDate()),h:p(n.getHours())+":"+p(n.getMinutes())}}
function load(){try{D=JSON.parse(localStorage.getItem("d64_"+cur)||"{}")}catch(e){D={}}
 const t=today();T[cur].f.forEach(f=>{if(D[f.k]==null){D[f.k]=f.t==="d"&&/fecha$|^fecha/.test(f.k)&&f.k!=="nac"?t.d:f.t==="h"&&["hora"].includes(f.k)?t.h:f.d||(f.t==="n"?"0":"")}})}
function save(){try{localStorage.setItem("d64_"+cur,JSON.stringify(D))}catch(e){}}
function build(){
 const tp=T[cur];let L=[tp.h,""];
 tp.f.forEach(f=>{let v=D[f.k];if(v==null||v===""||f.k==="hfin"||f.k==="hini")return;
  if(f.t==="d")v=fm(v);
  if(cur==="zip"&&f.k==="fecha"){}
  const e=f.e?f.e+" ":"",lb=f.l.replace(/ \(.*\)/,"");
  const pre=tp.pre?tp.pre:"";
  if(f.f==="l"){
   if(f.t==="n"&&v.length===1)v="0"+v;
   if(cur==="zip"&&f.k==="fecha")L.push(e+lb+": "+v,"⏰ Hora de ejecución del ZIP: "+(D.hini||"")+" a "+(D.hfin||"")+" horas");
   else L.push(pre+e+lb+": "+v);
   if(["zd","dis"].includes(f.k)||f.k==="fecha"&&cur==="zip")L.push("");
   if(cur==="zip"&&f.k==="p90"||f.k==="d90")L.push("");
  }else if(f.t==="a"||f.w&&f.t==="t"&&["lug","imp"].includes(f.k)||f.k==="dec"){
   L.push("*"+e+up(lb)+"*",v,"");
  }else L.push("*"+e+up(lb)+":* "+v);
 });
 if(tp.foot)L.push("━━━━━━━━━━━━━━━━━━",FOOT);
 return L.join("\n").replace(/\n{3,}/g,"\n\n").trim();
}
function draw(){
 const box=$("form");box.innerHTML="";
 T[cur].f.forEach(f=>{
  if(f.k==="hfin")return;
  const w=document.createElement("div");if(f.w||f.t==="a")w.className="w";
  const lab=document.createElement("label");lab.textContent=f.l+(f.k==="hini"?" – inicio / fin":"");w.appendChild(lab);
  let i;
  if(f.t==="a"){i=document.createElement("textarea");if(f.big)i.style.minHeight="130px"}
  else if(f.t==="s"){i=document.createElement("select");[""].concat(f.o).forEach(o=>{const op=document.createElement("option");op.value=o;op.textContent=o||"—";i.appendChild(op)})}
  else{i=document.createElement("input");i.type=f.t==="d"?"date":f.t==="h"?"time":f.t==="n"?"number":"text";if(f.t==="n"){i.min=0;i.inputMode="numeric"}}
  i.value=D[f.k]||"";
  i.oninput=()=>{D[f.k]=i.value;upd()};i.onchange=i.oninput;
  w.appendChild(i);box.appendChild(w);
  if(f.k==="hini"){const j=document.createElement("input");j.type="time";j.value=D.hfin||"";j.style.marginTop="6px";j.oninput=()=>{D.hfin=j.value;upd()};w.appendChild(j)}
 });
 upd();
}
function upd(){save();$("out").textContent=build()}
function say(t){$("msg").textContent=t;setTimeout(()=>$("msg").textContent="",2500)}
$("tipo").innerHTML=Object.keys(T).map(k=>`<option value="${k}">${T[k].n}</option>`).join("");
$("tipo").onchange=e=>{cur=e.target.value;load();draw()};
$("cp").onclick=async()=>{const t=build();try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement("textarea");a.value=t;document.body.appendChild(a);a.select();document.execCommand("copy");a.remove()}say("Plantilla copiada ✅")};
$("wa").onclick=()=>window.open("https://wa.me/?text="+encodeURIComponent(build()),"_blank");
$("tx").onclick=()=>{const b=new Blob(["\ufeff"+build()],{type:"text/plain;charset=utf-8"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="plantilla_"+cur+"_"+(D.fecha||"").replace(/-/g,"")+".txt";a.click();say("Archivo descargado")};
let cT;
$("cl").onclick=()=>{const b=$("cl");
 if(!b.dataset.ok){b.dataset.ok=1;b.textContent="⚠️ Toca otra vez para borrar";cT=setTimeout(()=>{delete b.dataset.ok;b.textContent="🧹 Limpiar"},3000);return}
 clearTimeout(cT);delete b.dataset.ok;b.textContent="🧹 Limpiar";
 try{localStorage.removeItem("d64_"+cur)}catch(e){}
 D={};load();draw();say("Datos borrados 🧹")};
const TH=["auto","light","dark"],TL={auto:"🌓 Auto",light:"☀️ Claro",dark:"🌙 Oscuro"};
let th="auto";try{th=localStorage.getItem("d64_theme")||"auto"}catch(e){}
function setTh(){const r=document.documentElement;if(th==="auto")r.removeAttribute("data-theme");else r.setAttribute("data-theme",th);$("th").textContent=TL[th]}
$("th").onclick=()=>{th=TH[(TH.indexOf(th)+1)%3];try{localStorage.setItem("d64_theme",th)}catch(e){}setTh()};
setTh();
load();draw();
if("serviceWorker"in navigator)window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
