
window.mtDataReady.then(function(){

(function(){
  var list = MEKANLAR.filter(function(m){return m.aktif!==false;});
  var katMap = {}; KATEGORILER.forEach(function(k){katMap[k.id]=k;});
  var state = {q:"",kat:"hepsi",bolge:"hepsi",sort:"oran",favoritesOnly:false};
  var favKey="mt-kart-favorites-v1",favorites=[];
  try{var stored=JSON.parse(localStorage.getItem(favKey)||"[]");if(Array.isArray(stored))favorites=stored.filter(function(x){return typeof x==="string";});}catch(e){}
  function favId(m){return m.id||m.ad+"|"+m.kat;}
  function isFav(m){return favorites.indexOf(favId(m))!==-1;}
  function updateFavCount(){document.getElementById("favoritesCount").textContent=favorites.length;}
  var favoritesOnly=document.getElementById("favoritesOnly");
  favoritesOnly.addEventListener("click",function(){state.favoritesOnly=!state.favoritesOnly;favoritesOnly.setAttribute("aria-pressed",String(state.favoritesOnly));render();});
  document.getElementById("grid").addEventListener("click",function(e){
    var b=e.target.closest(".mt-fav-btn");if(!b)return;e.stopPropagation();
    var m=list[Number(b.dataset.favIndex)];if(!m)return;
    var id=favId(m),i=favorites.indexOf(id);if(i<0)favorites.push(id);else favorites.splice(i,1);
    try{localStorage.setItem(favKey,JSON.stringify(favorites));}catch(err){}
    updateFavCount();render();
  });
  updateFavCount();
  var collator = new Intl.Collator("tr");
  function fold(s){return String(s).toLocaleLowerCase("tr").replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/â/g,"a").replace(/[’']/g,"");}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

  // rakamlar
  var pcts = list.map(function(m){return m.oran;}).filter(function(n){return n>0;});
  document.getElementById("statCount").textContent = new Set(list.map(function(m){return m.ad})).size;
  if(pcts.length){document.getElementById("statRange").textContent = "%"+Math.min.apply(null,pcts)+"–"+Math.max.apply(null,pcts);}

  // filtre kontrolleri
  var chips = document.getElementById("chips");
  KATEGORILER.forEach(function(k){
    var b = document.createElement("button");
    b.type="button"; b.className="chip"; b.dataset.id=k.id;
    b.setAttribute("aria-pressed", k.id==="hepsi"?"true":"false");
    b.textContent = (k.ikon?k.ikon+" ":"")+k.ad;
    chips.appendChild(b);
  });
  chips.addEventListener("click",function(e){
    var b = e.target.closest(".chip"); if(!b) return;
    state.kat = b.dataset.id;
    Array.prototype.forEach.call(chips.children,function(c){c.setAttribute("aria-pressed", c===b?"true":"false");});
    render();
  });
  var regionSel = document.getElementById("region");
  BOLGELER.forEach(function(r){var o=document.createElement("option");o.value=r.id;o.textContent=r.ad;regionSel.appendChild(o);});
  regionSel.addEventListener("change",function(){state.bolge=regionSel.value;render();});
  document.getElementById("sort").addEventListener("change",function(e){state.sort=e.target.value;render();});
  document.getElementById("q").addEventListener("input",function(e){state.q=fold(e.target.value.trim());render();});

  var grid = document.getElementById("grid"), empty = document.getElementById("empty"), count = document.getElementById("count");
  document.getElementById("totalVenues").textContent = new Set(list.map(function(m){return m.ad})).size;
  var maxRate = Math.max.apply(null,list.map(function(m){return Number(m.oran)||0;}));
  document.getElementById("maxDiscount").textContent = "%"+maxRate;
  document.getElementById("resetFilters").addEventListener("click",function(){
    state.kat="hepsi";state.bolge="hepsi";state.sort="oran";state.q="";state.favoritesOnly=false;favoritesOnly.setAttribute("aria-pressed","false");
    document.getElementById("q").value="";regionSel.value="hepsi";
    document.getElementById("sort").value="oran";
    var selected=chips.querySelectorAll("button");selected.forEach(function(b){b.setAttribute("aria-pressed",b.dataset.id==="hepsi"?"true":"false");});
    render();
  });
  function render(){
    var out = list.filter(function(m){
      if(state.favoritesOnly && !isFav(m))return false;
      if(state.kat!=="hepsi" && m.kat!==state.kat) return false;
      if(state.bolge!=="hepsi" && m.bolge!==state.bolge) return false;
      if(state.q){
        var hay = fold(m.ad+" "+(m.not||"")+" "+(katMap[m.kat]?katMap[m.kat].ad:"")+" "+m.yer.join(" "));
        if(hay.indexOf(state.q)<0) return false;
      }
      return true;
    }).sort(function(a,b){
      if(state.sort==="oran" && b.oran!==a.oran) return b.oran-a.oran;
      return collator.compare(a.ad,b.ad);
    });
    grid.innerHTML = out.map(function(m){
      var k = katMap[m.kat]||katMap.diger;
      return '<article class="venue" tabindex="0" role="button" aria-label="'+esc(m.ad)+' işletme detaylarını aç" data-venue-index="'+list.indexOf(m)+'">'+
        (window.mtImageUrl(m.gorsel)?'<figure class="venue-photo"><img src="'+esc(window.mtImageUrl(m.gorsel))+'" alt="'+esc(m.ad)+' işletme görseli" width="640" height="360" loading="lazy" decoding="async" fetchpriority="low" data-venue-photo></figure>':'')+
        '<div class="v-top"><span class="v-icon" aria-hidden="true">'+k.ikon+'</span>'+
        '<div class="v-title"><h3>'+esc(m.ad)+'</h3><p>'+esc(k.ad)+'</p></div>'+
        '<div class="v-badge"><b>'+esc(m.rozet)+'</b><small>'+esc(m.alt||"indirim")+'</small></div></div>'+
        '<p class="v-detail">'+(m.not?esc(m.not):'Detaylar için işletmeye danışın')+'</p>'+
        '<div class="venue-divider"></div><ul class="v-loc">'+m.yer.map(function(y){return '<li>📍 '+esc(y)+'</li>';}).join("")+'</ul>'+
      '<span class="v-more">İşletme detayları →</span>'+
        '<a class="mt-nearby-map" href="'+esc(window.mtMapUrl(m))+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(m.ad)+' Google Haritalar üzerinde ara">📍 Haritada ara ↗</a>'+
        '<button class="mt-fav-btn" type="button" data-fav-index="'+list.indexOf(m)+'" aria-pressed="'+isFav(m)+'" aria-label="'+(isFav(m)?'Favorilerden çıkar: ':'Favorilere ekle: ')+esc(m.ad)+'">'+(isFav(m)?'♥':'♡')+'</button></article>';
    }).join("");
    grid.querySelectorAll('[data-venue-photo]').forEach(function(img){img.addEventListener('error',function(){img.hidden=true;img.parentNode.classList.add('unavailable');},{once:true});});
    count.textContent = out.length+" şube gösteriliyor";
    document.getElementById("resetFilters").hidden = state.kat==="hepsi" && state.bolge==="hepsi" && !state.q && state.sort==="oran" && !state.favoritesOnly;
    empty.classList.toggle("show", out.length===0);
  }
  window.addEventListener('mt-data-update',function(){list=MEKANLAR.filter(function(m){return m.aktif!==false});var n=new Set(list.map(function(m){return m.ad})).size;document.getElementById('totalVenues').textContent=n;document.getElementById('statCount').textContent=n;var rates=list.map(function(m){return m.oran}).filter(function(n){return n>0});document.getElementById('maxDiscount').textContent=rates.length?'%'+Math.max.apply(null,rates):'—';document.getElementById('statRange').textContent=rates.length?'%'+Math.min.apply(null,rates)+'–'+Math.max.apply(null,rates):'—';render();});
  render();
})();

});
/* Kart: çevirme + hafif eğilme */
(function(){
  var card = document.getElementById("card"), stage = document.getElementById("stage");
  var btn = document.getElementById("flip"), txt = document.getElementById("flipText");
  function toggle(){
    card.classList.add("is-turning");
    card.style.setProperty("--ry","0deg");
    card.style.setProperty("--rx","0deg");
    var f = card.classList.toggle("flipped");
    clearTimeout(card._turnTimer);
    card._turnTimer = setTimeout(function(){card.classList.remove("is-turning");},760);
    btn.setAttribute("aria-pressed", f?"true":"false");
    txt.textContent = f ? "Ön yüzü gör" : "Arka yüzü gör";
  }
  btn.addEventListener("click",toggle);
  stage.addEventListener("pointermove",function(e){
    if(e.pointerType!=="mouse" || card.classList.contains("is-turning")) return;
    var r = stage.getBoundingClientRect();
    var x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
    card.style.setProperty("--ry",(x*18)+"deg");
    card.style.setProperty("--rx",(-y*14)+"deg");
    card.style.setProperty("--shine-x",((x+.5)*100)+"%");
    card.style.setProperty("--shine-y",((y+.5)*100)+"%");
  });
  stage.addEventListener("pointerleave",function(){if(!card.classList.contains("is-turning")){card.style.setProperty("--ry","0deg");card.style.setProperty("--rx","0deg");}});
})();




