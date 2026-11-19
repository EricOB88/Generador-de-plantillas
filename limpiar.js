let aT;
$("ca").onclick=()=>{const b=$("ca");
 if(!b.dataset.ok){b.dataset.ok=1;b.textContent="⚠️ Toca otra vez para borrar todo";aT=setTimeout(()=>{delete b.dataset.ok;b.textContent="🗑️ Limpiar todo"},3000);return}
 clearTimeout(aT);delete b.dataset.ok;b.textContent="🗑️ Limpiar todo";
 try{Object.keys(T).forEach(k=>localStorage.removeItem("cr_"+k));localStorage.removeItem("cr_geo")}catch(e){}
 G.del=G.prov=G.can=G.dis="";D={};geo();load();draw();say("Todos los datos borrados 🗑️")};
