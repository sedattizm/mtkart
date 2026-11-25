window.mtDataReady.then(function(){
(function(){
 var grid=document.getElementById('grid'),dlg=document.getElementById('mtVenueDialog');
 if(!grid||!dlg||typeof MEKANLAR==='undefined')return;
 var venues=MEKANLAR.filter(function(m){return m.aktif!==false});
 var close=document.getElementById('mtDialogClose'),done=document.getElementById('mtDialogDone');
 var categories={};KATEGORILER.forEach(function(k){categories[k.id]=k.ad});
 function openVenue(el){
  venues=MEKANLAR.filter(function(m){return m.aktif!==false});var m=venues[Number(el.dataset.venueIndex)];if(!m)return;
  document.getElementById('mtDialogName').textContent=m.ad;
  document.getElementById('mtDialogCategory').textContent=categories[m.kat]||'İşletme';
  document.getElementById('mtDialogDiscount').textContent=m.rozet||('%'+m.oran);
  document.getElementById('mtDialogConditions').textContent=m.not||'Detaylar için işletmeye danışın';
  document.getElementById('mtDialogLocation').textContent=m.adres||(m.yer||[]).join(' · ')||'Konum belirtilmemiş';
  document.getElementById('mtDialogMaps').href=window.mtMapUrl(m);
  if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','');
 }
 grid.addEventListener('click',function(e){if(e.target.closest('.mt-fav-btn'))return;if(e.target.closest('a,button'))return;var el=e.target.closest('[data-venue-index]');if(el)openVenue(el)});
 grid.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-venue-index]')){e.preventDefault();openVenue(e.target)}});
 function shut(){if(typeof dlg.close==='function')dlg.close();else dlg.removeAttribute('open')}
 close.addEventListener('click',shut);done.addEventListener('click',shut);
 dlg.addEventListener('click',function(e){if(e.target===dlg)shut()});
})();

});
