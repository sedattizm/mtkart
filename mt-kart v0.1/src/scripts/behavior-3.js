window.mtDataReady.then(function(){(function(){
 var select=document.getElementById('calcVenue'),amount=document.getElementById('calcAmount');
 if(!select||!amount||typeof MEKANLAR==='undefined')return;
 var eligible=MEKANLAR.filter(function(m){return m.aktif!==false && Number(m.oran)>0 && Number(m.oran)<=100});
 eligible.forEach(function(m,i){var opt=document.createElement('option');opt.value=String(i);opt.textContent=m.ad+' · '+m.yer.join(', ')+' ('+m.rozet+')';select.appendChild(opt)});
 var fmt=new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'});
 function range(a,b){return fmt.format(a)+(Math.abs(a-b)>0.001?' – '+fmt.format(b):'')}
 function update(){
  var m=eligible[Number(select.value)],raw=Number(amount.value),valid=amount.value.trim()!==''&&Number.isFinite(raw)&&raw>=0&&!!m;
  document.getElementById('calcOriginal').textContent=valid?fmt.format(raw):'—';
  document.getElementById('calcSaved').textContent=valid?range(raw*(m.minOran||m.oran)/100,raw*m.oran/100):'—';
  document.getElementById('calcFinal').textContent=valid?range(raw*(1-m.oran/100),raw*(1-(m.minOran||m.oran)/100)):'—';
  document.getElementById('calcNote').textContent=valid
   ?'Seçilen indirim: '+m.rozet+'. '+(m.not?'Koşul: '+m.not+'. ':'')+'Tahmini tutardır; işletme şartlarını ödeme öncesi doğrulayın.'
   :'Geçerli bir alışveriş tutarı girin.';
 }
 window.addEventListener('mt-data-update',function(){var id=eligible[Number(select.value)]&&eligible[Number(select.value)].id;eligible=MEKANLAR.filter(function(m){return m.aktif!==false&&m.oran>0});select.replaceChildren();eligible.forEach(function(m,i){var o=document.createElement('option');o.value=i;o.textContent=m.ad+' · '+m.yer.join(', ')+' ('+m.rozet+')';select.appendChild(o);if(m.id===id)select.value=i;});update();});select.addEventListener('change',update);amount.addEventListener('input',update);update();
})();

});
