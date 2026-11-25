
/* =====================================================================
   MEKÂN LİSTESİ: yeni mekân eklemek ya da değiştirmek için sadece bu dizi.
   ad: isim · kat: kafe|yemek|tatli|guzellik|eglence|diger
   bolge: universite|osmangazi|cok|diger · oran: sıralama için sayı (en yüksek %)
   rozet: kartın köşesinde görünen yazı · alt: rozetin altındaki küçük yazı (boşsa "indirim")
   not: açıklama/şart · yer: şube etiketleri · aktif:false → listede gizlenir
   ===================================================================== */
var MEKANLAR = [{"id":"mt-001-01","ad":"Luuq Coffee","kat":"kafe","bolge":"universite","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. Belkıs Evler No:331 C-D Şahinbey/Gaziantep","enlem":"37.0423","boylam":"37.3326","harita":"https://www.google.com/maps/search/?api=1&query=Luuq+Coffee+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-002-01","ad":"Kumrucu Asım","kat":"yemek","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Menülerde","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:29 Şahinbey/Gaziantep","enlem":"37.0418","boylam":"37.3317","harita":"https://www.google.com/maps/search/?api=1&query=Kumrucu+As%C4%B1m+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-003-01","ad":"Türkan’ın Ev Yemekleri","kat":"yemek","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Yemek bedeli","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:37/B Şahinbey/Gaziantep","enlem":"37.042","boylam":"37.3321","harita":"https://www.google.com/maps/search/?api=1&query=T%C3%BCrkan%E2%80%99%C4%B1n+Ev+Yemekleri+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-003-02","ad":"Türkan’ın Ev Yemekleri","kat":"yemek","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Yemek bedeli","yer":["Çocuk Hastanesi"],"adres":"23 Nisan Mah. Üniversite Blv. Çocuk Hastanesi Karşısı No:240 Şahinbey/Gaziantep","enlem":"37.0442","boylam":"37.3382","harita":"https://www.google.com/maps/search/?api=1&query=T%C3%BCrkan%E2%80%99%C4%B1n+Ev+Yemekleri+%C3%87ocuk+Hastanesi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-004-01","ad":"Coffy","kat":"kafe","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Paket gıda hariç","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:39C Şahinbey/Gaziantep","enlem":"37.0421","boylam":"37.3323","harita":"https://www.google.com/maps/search/?api=1&query=Coffy+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-005-01","ad":"Tavumi","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Paket gıda hariç","yer":["Üniversite"],"adres":"Güneykent Mah. 102209 Nolu Sk. No:9/A Şahinbey/Gaziantep","enlem":"37.0374","boylam":"37.3338","harita":"https://www.google.com/maps/search/?api=1&query=Tavumi+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-005-02","ad":"Tavumi","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Paket gıda hariç","yer":["Akkent"],"adres":"Akkent Mah. 134001 Nolu Sk. No:7/D Şahinbey/Gaziantep","enlem":"37.0192","boylam":"37.3478","harita":"https://www.google.com/maps/search/?api=1&query=Tavumi+Akkent+Gaziantep","gorsel":"","aktif":true},{"id":"mt-005-03","ad":"Tavumi","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:11/B Şehitkamil/Gaziantep","enlem":"37.0673","boylam":"37.3231","harita":"https://www.google.com/maps/search/?api=1&query=Tavumi+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-006-01","ad":"Laos Coffee","kat":"kafe","bolge":"universite","minOran":15,"oran":20,"rozet":"%15–20","alt":"","not":"Americano ve filtre %15 · diğer ürünler %20","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:335/B Şahinbey/Gaziantep","enlem":"37.0425","boylam":"37.3314","harita":"https://www.google.com/maps/search/?api=1&query=Laos+Coffee+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-007-01","ad":"Cajun Corner","kat":"yemek","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler · paket gıda hariç","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:329 Şahinbey/Gaziantep","enlem":"37.0427","boylam":"37.3329","harita":"https://www.google.com/maps/search/?api=1&query=Cajun+Corner+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-008-01","ad":"Eren Palta Hair Studio","kat":"guzellik","bolge":"osmangazi","minOran":10,"oran":20,"rozet":"%10–20","alt":"","not":"Protein bakım, keratin vb. %20 · fön, kaş, bıyık vb. %10","yer":["Osmangazi"],"adres":"Osmangazi Mah. Mehmet Akif Ersoy Cad. No:14 Şehitkamil/Gaziantep","enlem":"37.0664","boylam":"37.3218","harita":"https://www.google.com/maps/search/?api=1&query=Eren+Palta+Hair+Studio+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-009-01","ad":"Simitçi Dünyası","kat":"tatli","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:319 Şahinbey/Gaziantep","enlem":"37.0431","boylam":"37.3339","harita":"https://www.google.com/maps/search/?api=1&query=Simit%C3%A7i+D%C3%BCnyas%C4%B1+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-010-01","ad":"Kaşık Muhallebicisi","kat":"tatli","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler · paket gıda hariç","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:35 Şahinbey/Gaziantep","enlem":"37.0419","boylam":"37.3316","harita":"https://www.google.com/maps/search/?api=1&query=Ka%C5%9F%C4%B1k+Muhallebicisi+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-011-01","ad":"Helvacı Ali","kat":"tatli","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:325 Şahinbey/Gaziantep","enlem":"37.0433","boylam":"37.3343","harita":"https://www.google.com/maps/search/?api=1&query=Helvac%C4%B1+Ali+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-012-01","ad":"Maya Bohem","kat":"kafe","bolge":"universite","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Yeditepe Mah. 85204 Nolu Sk. No:12 Şahinbey/Gaziantep","enlem":"37.0416","boylam":"37.3309","harita":"https://www.google.com/maps/search/?api=1&query=Maya+Bohem+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-013-01","ad":"Döner Rossa","kat":"yemek","bolge":"osmangazi","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler · paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:15 Şehitkamil/Gaziantep","enlem":"37.0671","boylam":"37.3234","harita":"https://www.google.com/maps/search/?api=1&query=D%C3%B6ner+Rossa+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-014-01","ad":"Bülent Aktaş Baklava","kat":"tatli","bolge":"osmangazi","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler · paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Ahmet Şireci Blv. No:10 Şehitkamil/Gaziantep","enlem":"37.0658","boylam":"37.3214","harita":"https://www.google.com/maps/search/?api=1&query=B%C3%BClent+Akta%C5%9F+Baklava+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-015-01","ad":"Dante Pizza","kat":"yemek","bolge":"osmangazi","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Mehmet Akif Ersoy Cad. No:18/A Şehitkamil/Gaziantep","enlem":"37.0667","boylam":"37.3224","harita":"https://www.google.com/maps/search/?api=1&query=Dante+Pizza+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-016-01","ad":"Burgeron","kat":"yemek","bolge":"osmangazi","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:13 Şehitkamil/Gaziantep","enlem":"37.067","boylam":"37.3233","harita":"https://www.google.com/maps/search/?api=1&query=Burgeron+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-017-01","ad":"Reis Döner","kat":"yemek","bolge":"osmangazi","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Tüm ürünler","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:9 Şehitkamil/Gaziantep","enlem":"37.0674","boylam":"37.3229","harita":"https://www.google.com/maps/search/?api=1&query=Reis+D%C3%B6ner+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-018-01","ad":"Kasımpatı Döner","kat":"yemek","bolge":"osmangazi","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Osmangazi"],"adres":"Osmangazi Mah. Mehmet Akif Ersoy Cad. No:20 Şehitkamil/Gaziantep","enlem":"37.0663","boylam":"37.3219","harita":"https://www.google.com/maps/search/?api=1&query=Kas%C4%B1mpat%C4%B1+D%C3%B6ner+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-019-01","ad":"Vav Wings","kat":"yemek","bolge":"osmangazi","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:7 Şehitkamil/Gaziantep","enlem":"37.0676","boylam":"37.3227","harita":"https://www.google.com/maps/search/?api=1&query=Vav+Wings+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-020-01","ad":"Makarona","kat":"yemek","bolge":"universite","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Makarna, pizza, tavuk pilav","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:37/A Şahinbey/Gaziantep","enlem":"37.0422","boylam":"37.3319","harita":"https://www.google.com/maps/search/?api=1&query=Makarona+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-021-01","ad":"Keyf-i Gözleme","kat":"yemek","bolge":"universite","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Paket gıda hariç","yer":["Üniversite"],"adres":"Yeditepe Mah. 85202 Nolu Sk. No:14 Şahinbey/Gaziantep","enlem":"37.0415","boylam":"37.3311","harita":"https://www.google.com/maps/search/?api=1&query=Keyf-i+G%C3%B6zleme+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-022-01","ad":"Antiocha Döner","kat":"yemek","bolge":"universite","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"","yer":["Üniversite"],"adres":"Güneykent Mah. Üniversite Blv. No:290 Şahinbey/Gaziantep","enlem":"37.0406","boylam":"37.3353","harita":"https://www.google.com/maps/search/?api=1&query=Antiocha+D%C3%B6ner+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-023-01","ad":"Kahve Tiryakisi","kat":"kafe","bolge":"universite","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"100 TL ve üzeri alışverişte kurabiye ikramı","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:315 Şahinbey/Gaziantep","enlem":"37.0436","boylam":"37.3354","harita":"https://www.google.com/maps/search/?api=1&query=Kahve+Tiryakisi+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-024-01","ad":"Grany Waffles & Kumpir","kat":"yemek","bolge":"universite","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:25 Şahinbey/Gaziantep","enlem":"37.0417","boylam":"37.3315","harita":"https://www.google.com/maps/search/?api=1&query=Grany+Waffles+%26+Kumpir+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-025-01","ad":"Mikel Coffee","kat":"kafe","bolge":"osmangazi","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Osmangazi"],"adres":"Osmangazi Mah. Ahmet Şireci Blv. No:18 Şehitkamil/Gaziantep","enlem":"37.0661","boylam":"37.3211","harita":"https://www.google.com/maps/search/?api=1&query=Mikel+Coffee+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-026-01","ad":"Pinku Bakery","kat":"tatli","bolge":"osmangazi","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler · paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:14 Şehitkamil/Gaziantep","enlem":"37.0672","boylam":"37.3237","harita":"https://www.google.com/maps/search/?api=1&query=Pinku+Bakery+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-027-01","ad":"Espressolab","kat":"kafe","bolge":"osmangazi","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Osmangazi"],"adres":"Osmangazi Mah. Ahmet Şireci Blv. No:22 Şehitkamil/Gaziantep","enlem":"37.0656","boylam":"37.3209","harita":"https://www.google.com/maps/search/?api=1&query=Espressolab+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-028-01","ad":"Sushinami","kat":"yemek","bolge":"osmangazi","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Menülerde","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:18 Şehitkamil/Gaziantep","enlem":"37.0672","boylam":"37.3241","harita":"https://www.google.com/maps/search/?api=1&query=Sushinami+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-029-01","ad":"Chesnut Coffee","kat":"kafe","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Üniversite · Kütüphane karşısı"],"adres":"GAÜN Kampüs Alanı, Merkez Kütüphane Karşısı Şahinbey/Gaziantep","enlem":"37.0361","boylam":"37.3284","harita":"https://www.google.com/maps/search/?api=1&query=Chesnut+Coffee+Gaziantep+%C3%9Cniversitesi","gorsel":"","aktif":true},{"id":"mt-030-01","ad":"Kajun","kat":"yemek","bolge":"diger","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Tüm ürünler","yer":["İconova Cadde"],"adres":"15 Temmuz Mah. Prof. Dr. Necmettin Erbakan Cad. İconova Cadde No:33 Şehitkamil/Gaziantep","enlem":"37.0514","boylam":"37.3204","harita":"https://www.google.com/maps/search/?api=1&query=Kajun+%C4%B0conova+Cadde+Gaziantep","gorsel":"","aktif":true},{"id":"mt-031-01","ad":"Hanneck Cafe","kat":"kafe","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:321 Şahinbey/Gaziantep","enlem":"37.0432","boylam":"37.3347","harita":"https://www.google.com/maps/search/?api=1&query=Hanneck+Cafe+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-032-01","ad":"Mr. Yaman Çiğköfte","kat":"yemek","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler · paket gıda hariç","yer":["Üniversite"],"adres":"Güneykent Mah. 102210 Nolu Sk. No:5 Şahinbey/Gaziantep","enlem":"37.0381","boylam":"37.3347","harita":"https://www.google.com/maps/search/?api=1&query=Mr.+Yaman+%C3%87i%C4%9Fk%C3%B6fte+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-033-01","ad":"Mama Döner Burger","kat":"yemek","bolge":"universite","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Paket gıda hariç","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:33 Şahinbey/Gaziantep","enlem":"37.042","boylam":"37.3318","harita":"https://www.google.com/maps/search/?api=1&query=Mama+D%C3%B6ner+Burger+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-034-01","ad":"La Casa Simülasyon Cafe","kat":"eglence","bolge":"universite","minOran":0,"oran":0,"rozet":"+25 dk","alt":"hediye süre","not":"1 saate 25 dakika hediye süre","yer":["Üniversite"],"adres":"Güneykent Mah. 102208 Nolu Sk. No:8 Şahinbey/Gaziantep","enlem":"37.0379","boylam":"37.3337","harita":"https://www.google.com/maps/search/?api=1&query=La+Casa+Sim%C3%BClasyon+Cafe+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-035-01","ad":"Ceren Güngördü Beauty","kat":"guzellik","bolge":"diger","minOran":25,"oran":25,"rozet":"25%","alt":"","not":"Cilt bakımı, lazer, protez tırnak, dövme silme, manikür, pedikür","yer":["Diğer bölgeler"],"adres":"İncilipınar Mah. Muammer Aksoy Blv. No:16 Şehitkamil/Gaziantep","enlem":"37.0652","boylam":"37.3712","harita":"https://www.google.com/maps/search/?api=1&query=Ceren+G%C3%BCng%C3%B6rd%C3%BC+Beauty+Gaziantep","gorsel":"","aktif":true},{"id":"mt-036-01","ad":"Kasap Hanifi Usta","kat":"diger","bolge":"diger","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Diğer bölgeler"],"adres":"Batıkent Mah. Kürşat Tüzmen Blv. No:28 Şehitkamil/Gaziantep","enlem":"37.0622","boylam":"37.3082","harita":"https://www.google.com/maps/search/?api=1&query=Kasap+Hanifi+Usta+Gaziantep","gorsel":"","aktif":true},{"id":"mt-037-01","ad":"Shimall Baklava","kat":"tatli","bolge":"diger","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Diğer bölgeler"],"adres":"Değirmiçem Mah. Mithat Enç Cad. Shimall Hotel Yanı Şehitkamil/Gaziantep","enlem":"37.0686","boylam":"37.3551","harita":"https://www.google.com/maps/search/?api=1&query=Shimall+Baklava+Gaziantep","gorsel":"","aktif":true},{"id":"mt-038-01","ad":"Varil Çorba","kat":"yemek","bolge":"universite","minOran":15,"oran":15,"rozet":"15%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Güneykent Mah. Üniversite Blv. No:280 Şahinbey/Gaziantep","enlem":"37.0401","boylam":"37.3359","harita":"https://www.google.com/maps/search/?api=1&query=Varil+%C3%87orba+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":true},{"id":"mt-039-01","ad":"Planet E-Spor","kat":"eglence","bolge":"diger","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Saatlik olarak","yer":["Karataş"],"adres":"Karataş Mah. 400 Nolu Cad. No:18 Şahinbey/Gaziantep","enlem":"37.0246","boylam":"37.3421","harita":"https://www.google.com/maps/search/?api=1&query=Planet+E-Spor+Karata%C5%9F+Gaziantep","gorsel":"","aktif":true},{"id":"mt-040-01","ad":"Fast Sosyete Burger","kat":"yemek","bolge":"cok","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Menülerde · paket gıda hariç","yer":["Osmangazi"],"adres":"Osmangazi Mah. Roza Cad. No:16 Şehitkamil/Gaziantep","enlem":"37.0673","boylam":"37.3235","harita":"https://www.google.com/maps/search/?api=1&query=Fast+Sosyete+Burger+Osmangazi+Gaziantep","gorsel":"","aktif":true},{"id":"mt-040-02","ad":"Fast Sosyete Burger","kat":"yemek","bolge":"cok","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Menülerde · paket gıda hariç","yer":["Karataş"],"adres":"Karataş Mah. 103410 Nolu Sk. No:4 Şahinbey/Gaziantep","enlem":"37.0237","boylam":"37.3436","harita":"https://www.google.com/maps/search/?api=1&query=Fast+Sosyete+Burger+Karata%C5%9F+Gaziantep","gorsel":"","aktif":true},{"id":"mt-041-01","ad":"Güler Kıvanç Güzellik Salonu","kat":"guzellik","bolge":"diger","minOran":20,"oran":20,"rozet":"20%","alt":"","not":"Lazer, tırnak, cilt bakımı, ipek kirpik · kadın ve erkek","yer":["Karataş"],"adres":"Karataş Mah. 400 Nolu Cad. No:24 Şahinbey/Gaziantep","enlem":"37.0241","boylam":"37.3414","harita":"https://www.google.com/maps/search/?api=1&query=G%C3%BCler+K%C4%B1van%C3%A7+G%C3%BCzellik+Salonu+Karata%C5%9F+Gaziantep","gorsel":"","aktif":true},{"id":"mt-042-01","ad":"Mert Kurt Optik","kat":"diger","bolge":"diger","minOran":0,"oran":0,"rozet":"Yakında","alt":"oran bilgisi","not":"","yer":["Diğer bölgeler"],"adres":"Sarıgüllük Mah. Zübeyde Hanım Blv. No:45 Şehitkamil/Gaziantep","enlem":"37.0642","boylam":"37.3512","harita":"https://www.google.com/maps/search/?api=1&query=Mert+Kurt+Optik+Gaziantep","gorsel":"","aktif":true},{"id":"mt-043-01","ad":"Öykü Döner","kat":"yemek","bolge":"universite","minOran":0,"oran":0,"rozet":"—","alt":"","not":"","yer":["Üniversite"],"adres":"Yeditepe Mah. 85203 Nolu Sk. No:31 Şahinbey/Gaziantep","enlem":"37.0421","boylam":"37.3317","harita":"https://www.google.com/maps/search/?api=1&query=%C3%96yk%C3%BC+D%C3%B6ner+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":false},{"id":"mt-044-01","ad":"Geek Coffee","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Vadi"],"adres":"Güvenevler Mah. Hoca Ahmet Yesevi Cad. No:32 Şehitkamil/Gaziantep","enlem":"37.0782","boylam":"37.3422","harita":"https://www.google.com/maps/search/?api=1&query=Geek+Coffee+Vadi+Gaziantep","gorsel":"","aktif":false},{"id":"mt-044-02","ad":"Geek Coffee","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Osmangazi"],"adres":"Osmangazi Mah. Ahmet Şireci Blv. No:12 Şehitkamil/Gaziantep","enlem":"37.0663","boylam":"37.3216","harita":"https://www.google.com/maps/search/?api=1&query=Geek+Coffee+Osmangazi+Gaziantep","gorsel":"","aktif":false},{"id":"mt-044-03","ad":"Geek Coffee","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Üniversite"],"adres":"Yeditepe Mah. Üniversite Blv. No:327 Şahinbey/Gaziantep","enlem":"37.0428","boylam":"37.3334","harita":"https://www.google.com/maps/search/?api=1&query=Geek+Coffee+%C3%9Cniversite+Gaziantep","gorsel":"","aktif":false},{"id":"mt-044-04","ad":"Geek Coffee","kat":"kafe","bolge":"cok","minOran":10,"oran":10,"rozet":"10%","alt":"","not":"Tüm ürünler","yer":["Sanat"],"adres":"Değirmiçem Mah. Fevzi Çakmak Blv. No:40 Şehitkamil/Gaziantep","enlem":"37.0691","boylam":"37.3622","harita":"https://www.google.com/maps/search/?api=1&query=Geek+Coffee+Sanat+Gaziantep","gorsel":"","aktif":false}];
var KATEGORILER = [
 {id:"hepsi",ad:"Tümü",ikon:""},
 {id:"kafe",ad:"Kafe",ikon:"☕"},
 {id:"yemek",ad:"Yemek",ikon:"🍽️"},
 {id:"tatli",ad:"Tatlı & Fırın",ikon:"🧁"},
 {id:"guzellik",ad:"Güzellik",ikon:"💇"},
 {id:"eglence",ad:"Eğlence",ikon:"🎮"},
 {id:"saglik",ad:"Sağlık & Optik",ikon:"👓"},
 {id:"diger",ad:"Diğer",ikon:"🛍️"}
];
var BOLGELER = [
 {id:"hepsi",ad:"Tüm bölgeler"},
 {id:"universite",ad:"Üniversite çevresi"},
 {id:"osmangazi",ad:"Osmangazi"},
 {id:"cok",ad:"Birden fazla şube"},
 {id:"diger",ad:"Diğer bölgeler"}
];


;
/* Public, read-only business data. User location never leaves this page. */
(function(){
'use strict';
var key='mt-sheet-data-v3-1EonbINcMH3',busy=false,last='',seq=0;
window.mtCoords=function(m){var lat=Number(m.enlem),lon=Number(m.boylam);if(m.enlem!==''&&m.boylam!==''&&Number.isFinite(lat)&&Number.isFinite(lon)&&Math.abs(lat)<=90&&Math.abs(lon)<=180)return [lat,lon];try{var u=new URL(m.harita),q=u.searchParams.get('q')||u.searchParams.get('query')||'',a=q.split(',').map(Number);if(a.length===2&&a.every(Number.isFinite)&&Math.abs(a[0])<=90&&Math.abs(a[1])<=180)return a;}catch(e){}return null;};
window.mtImageUrl=function(s){try{var u=new URL(String(s||''));return u.protocol==='https:'&&!u.username&&!u.password?u.href:''}catch(e){return ''}};
window.mtMapUrl=function(m){var c=window.mtCoords(m);if(c)return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(c.join(','));try{var u=new URL(m.harita);if(u.protocol==='https:'&&(/(^|\.)google\.(com|com\.tr)$/.test(u.hostname)||u.hostname==='maps.app.goo.gl'||u.hostname==='goo.gl'))return u.href;}catch(e){}return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(m.ad+' '+m.yer.join(' ')+' '+(m.adres||'Gaziantep'));};
function status(s){var el=document.getElementById('mtDataStatus');if(el)el.textContent=s;}
function convert(t){if(!t||!Array.isArray(t.cols)||!Array.isArray(t.rows))throw Error('table');var names=t.cols.map(function(c){return c.label.trim()});['id','isletme','indirim_min','indirim_max','aktif'].forEach(function(h){if(names.indexOf(h)<0)throw Error('column '+h)});var seen={};return t.rows.filter(function(r){return r.c&&r.c.some(function(c){return c&&c.v!=null})}).map(function(r){var o={};names.forEach(function(n,i){o[n]=r.c[i]&&r.c[i].v!=null?r.c[i].v:''});if(!o.id||!o.isletme||seen[o.id])throw Error('id');seen[o.id]=true;var lo=Number(o.indirim_min),hi=Number(o.indirim_max);if(!Number.isFinite(lo)||!Number.isFinite(hi)||lo<0||hi>100||lo>hi)throw Error('rate');var badge=r.c[names.indexOf('rozet')];return {id:String(o.id),ad:String(o.isletme),kat:String(o.kategori||'diger'),bolge:String(o.bolge||'diger'),minOran:lo,oran:hi,rozet:badge?String(badge.f||badge.v):('%'+hi),alt:String(o.rozet_alt||''),not:String(o.kosullar||''),yer:[String(o.sube||'')],adres:String(o.adres||''),enlem:o.enlem,boylam:o.boylam,harita:String(o.harita_url||''),gorsel:window.mtImageUrl(o.gorsel_url||''),aktif:['EVET','TRUE','1'].indexOf(String(o.aktif).trim().toLocaleUpperCase('tr'))>=0};});}
window.mtParseSheet=convert;
function load(){if(busy)return Promise.resolve();busy=true;return new Promise(function(resolve){var script=document.createElement('script'),name='mtSheetResponse'+(++seq),timer;function finish(){clearTimeout(timer);script.remove();delete window[name];busy=false;resolve();}window[name]=function(data){try{if(data.status!=='ok')throw Error('response');var items=convert(data.table),sig=JSON.stringify(items);if(sig!==last){MEKANLAR=items;last=sig;try{localStorage.setItem(key,JSON.stringify({items:items,time:Date.now()}))}catch(e){}window.dispatchEvent(new Event('mt-data-update'));}}catch(e){status('Güncel tablo okunamadı; son kullanılabilir liste gösteriliyor.')}finish();};script.onerror=function(){status('Bağlantı kurulamadı; son kullanılabilir liste gösteriliyor.');finish();};timer=setTimeout(function(){status('Tabloya erişilemedi; son kullanılabilir liste gösteriliyor.');finish();},12000);script.src='https://docs.google.com/spreadsheets/d/1EonbINcMH3rkLH-AEFOm2wO-lazNAtpKsHn4SzMc0PY/gviz/tq?headers=1&tqx='+encodeURIComponent('out:json;responseHandler:'+name)+'&_='+Date.now();document.head.appendChild(script);});}
try{var cache=JSON.parse(localStorage.getItem(key)||'null');if(cache&&Array.isArray(cache.items)){MEKANLAR=cache.items;last=JSON.stringify(MEKANLAR);}}catch(e){}
window.mtDataReady=Promise.resolve();setTimeout(load,0);setInterval(function(){if(!document.hidden)load()},120000);document.addEventListener('visibilitychange',function(){if(!document.hidden)load()});
})();

;

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





;
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

;
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

;
window.mtDataReady.then(function(){
var select=document.getElementById('mtMapVenue'),link=document.getElementById('mtNearbyOpen'),button=document.getElementById('mtLocate'),status=document.getElementById('mtLocationStatus'),results=document.getElementById('mtNearResults'),venues=[],position=null;
function update(){var m=venues[Number(select.value)];if(m)link.href=window.mtMapUrl(m);link.hidden=!m;}
function distance(a,b){var r=Math.PI/180,dlat=(b[0]-a[0])*r,dlon=(b[1]-a[1])*r,x=Math.sin(dlat/2)**2+Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dlon/2)**2;return 6371*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
function nearby(){results.replaceChildren();if(!position)return;var list=venues.filter(function(m){return window.mtCoords(m)}).map(function(m){return {m:m,d:distance(position,window.mtCoords(m))}}).sort(function(a,b){return a.d-b.d});status.textContent=list.length?'Kuş uçuşu mesafeye göre en yakın 10 şube. Konumun kaydedilmez.':'Henüz geçerli konum bilgisi olan şube yok.';list.slice(0,10).forEach(function(x){var row=document.createElement('p'),a=document.createElement('a');a.textContent=x.m.ad+' · '+x.m.yer.join(', ')+' — '+(x.d<1?Math.round(x.d*1000)+' m':x.d.toFixed(1)+' km')+' · '+x.m.rozet+' ↗';a.href=window.mtMapUrl(x.m);a.target='_blank';a.rel='noopener noreferrer';row.appendChild(a);results.appendChild(row)});}
function populate(){var id=venues[Number(select.value)]&&venues[Number(select.value)].id;venues=MEKANLAR.filter(function(m){return m.aktif!==false});select.replaceChildren();venues.forEach(function(m,i){var opt=document.createElement('option');opt.value=i;opt.textContent=m.ad+' · '+m.yer.join(', ');select.appendChild(opt);if(m.id===id)select.value=i});update();nearby();}
select.addEventListener('change',update);window.addEventListener('mt-data-update',populate);populate();
button.addEventListener('click',function(){if(!navigator.geolocation){status.textContent='Tarayıcın konumu desteklemiyor; bölge filtresini kullanabilirsin.';return;}button.disabled=true;status.textContent='Konum izni bekleniyor…';navigator.geolocation.getCurrentPosition(function(p){position=[p.coords.latitude,p.coords.longitude];button.disabled=false;nearby();},function(e){button.disabled=false;status.textContent=e.code===1?'Konum izni verilmedi. Bölge filtresiyle devam edebilirsin.':'Konum alınamadı. Telefonunun konum ayarlarını kontrol edip tekrar dene.';},{enableHighAccuracy:false,timeout:12000,maximumAge:60000});});
});

;
window.mtDataReady.then(function(){
(function(){
 var form=document.getElementById('mtSavingsForm'),venue=document.getElementById('mtSavingsVenue'),amount=document.getElementById('mtSavingsAmount'),rate=document.getElementById('mtSavingsRate'),list=document.getElementById('mtSavingsList'),status=document.getElementById('mtSavingsStatus');
 if(!form||typeof MEKANLAR==='undefined')return;
 var key='mt-kart-savings-v1',entries=[];var fmt=new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'});
 var venues=MEKANLAR.filter(function(m){return m.aktif!==false});
 venues.forEach(function(m,i){var o=document.createElement('option');o.value=String(i);o.textContent=m.ad+' · '+m.yer.join(', ');venue.appendChild(o)});
 window.addEventListener('mt-data-update',function(){var id=venues[Number(venue.value)]&&venues[Number(venue.value)].id;venues=MEKANLAR.filter(function(m){return m.aktif!==false});venue.replaceChildren();venues.forEach(function(m,i){var o=document.createElement('option');o.value=i;o.textContent=m.ad+' · '+m.yer.join(', ');venue.appendChild(o);if(m.id===id)venue.value=i;});syncRate();});
 function syncRate(){var m=venues[Number(venue.value)];rate.value=m&&m.minOran==null?String(m.oran||0):'';rate.placeholder=m&&m.minOran?'%'+m.minOran+'–'+m.oran+' · fişindeki oran':''}venue.addEventListener('change',syncRate);syncRate();
 try{var data=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(data))entries=data.filter(function(e){return e&&typeof e.name==='string'&&Number.isFinite(e.amount)&&Number.isFinite(e.rate)&&e.amount>0&&e.rate>=0&&e.rate<=100}).slice(0,500)}catch(e){status.textContent='Önceki kayıtlar okunamadı.'}
 function save(){try{localStorage.setItem(key,JSON.stringify(entries));return true}catch(e){status.textContent='Tarayıcı depolama alanına kaydedilemedi.';return false}}
 function render(){var total=0,saved=0;entries.forEach(function(e){total+=e.amount;saved+=e.amount*e.rate/100});document.getElementById('mtSavingsSpent').textContent=fmt.format(total);document.getElementById('mtSavingsSaved').textContent=fmt.format(saved);document.getElementById('mtSavingsCount').textContent=String(entries.length);list.replaceChildren();if(!entries.length){var empty=document.createElement('p');empty.className='mt-savings-empty';empty.textContent='Henüz alışveriş kaydı yok.';list.appendChild(empty);return}entries.slice().reverse().forEach(function(e,i){var item=document.createElement('div');item.className='mt-savings-item';var detail=document.createElement('div');var name=document.createElement('b');name.textContent=e.name;var info=document.createElement('small');info.textContent=e.date+' · '+fmt.format(e.amount)+' · %'+e.rate+' indirim · '+fmt.format(e.amount*e.rate/100)+' tasarruf';detail.append(name,info);var del=document.createElement('button');del.type='button';del.textContent='Sil';del.setAttribute('aria-label',e.name+' alışveriş kaydını sil');del.addEventListener('click',function(){entries.splice(entries.length-1-i,1);save();render();status.textContent='Kayıt silindi.'});item.append(detail,del);list.appendChild(item)})}
 form.addEventListener('submit',function(ev){ev.preventDefault();var m=venues[Number(venue.value)],a=Number(amount.value),r=Number(rate.value);if(!m||!Number.isFinite(a)||a<=0||a>10000000||!Number.isFinite(r)||r<0||r>100){status.textContent='Geçerli bir işletme, tutar ve indirim oranı gir.';return}entries.push({name:m.ad,amount:Math.round(a*100)/100,rate:r,date:new Date().toLocaleDateString('tr-TR')});if(entries.length>500)entries.shift();save();render();status.textContent='Alışveriş kaydı eklendi.';amount.value=''});render();
})();

});

;

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
