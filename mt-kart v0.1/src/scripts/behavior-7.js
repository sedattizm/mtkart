
(function(){
  var key='mt-kart-theme-v2', root=document.documentElement;
  var button=document.getElementById('mtThemeToggle');
  if(!button)return;
  function apply(mode){
    if(mode==='dark'){root.setAttribute('data-mt-theme','dark');}
    else{root.removeAttribute('data-mt-theme');}
    var dark=mode==='dark';
    button.textContent=dark?'☀ Açık':'☾ Koyu';
    button.setAttribute('aria-label',dark?'Aydınlık temayı aç':'Karanlık temayı aç');
    button.setAttribute('aria-pressed',String(dark));
    var meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute('content',dark?'#0b1728':'#0a2a5e');
  }
  var stored='light';
  try{if(localStorage.getItem(key)==='dark')stored='dark';}catch(e){}
  apply(stored);
  button.addEventListener('click',function(){
    var next=root.getAttribute('data-mt-theme')==='dark'?'light':'dark';
    apply(next);
    try{localStorage.setItem(key,next);}catch(e){}
  });
})();
