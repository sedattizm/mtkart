# MT Kart — Astro

Astro ile statik (SSG) oluşturulan MT Kart sitesi. İşletmeler, açık Google Sheet’ten arka planda güncellenir. SSR, veritabanı veya gizli API anahtarı gerekmez.

## GitHub’a yükleme

ZIP’i çıkarın ve **içindeki dosya ve klasörleri** repository köküne yükleyin. `package.json`, `astro.config.mjs`, `package-lock.json`, `src/`, `public/` ve `scripts/` aynı kökte olmalı. ZIP dosyasını tek başına GitHub’a yüklemek siteyi kurmaz.

## Cloudflare Pages

1. Workers & Pages > Create application > Pages > Connect to Git.
2. GitHub repository’yi seçin.
3. Framework preset: Astro.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
6. Root directory: boş (repository kökü).
7. Node sürümü: 22 (`.node-version` pakette).

Pages, package-lock.json üzerinden bağımlılıkları kurar. İsterseniz `ASTRO_TELEMETRY_DISABLED=1` ortam değişkenini ekleyebilirsiniz. Bu kurulum Cloudflare **Pages** içindir; Workers deploy command veya wrangler gerektirmez.

## Yerelde çalıştırma

```sh
npm ci
npm run dev
```

Derleme ve kontrol:

```sh
npm run build
npm test
```

## Sheet ve fotoğraflar

Güncel kaynak: https://docs.google.com/spreadsheets/d/1EonbINcMH3rkLH-AEFOm2wO-lazNAtpKsHn4SzMc0PY/edit

Site ilk sekmeyi okur. Başlıkları ve mevcut id değerlerini koruyun. Fotoğraf için `gorsel_url` alanına doğrudan HTTPS görsel bağlantısı girin. Boşsa fotoğraf gösterilmez. WebP/AVIF ve küçük dosyalar kullanın; dış görseller otomatik küçültülmez.

İlk HTML, `src/data/venues.json` anlık görüntüsüyle üretilir; sayfa açıldıktan sonra Sheet arka planda yenilenir. Anlık görüntü eskiyse ilk gösterim kısa süre eski kayıtları içerebilir. Yeni deploy öncesinde bu JSON’u güncel tutun.

## Yapı

- `src/pages/index.astro`: ana sayfa
- `src/lib/render-venues.mjs`: statik işletme kartları
- `src/data/venues.json`: ilk açılış verisi
- `src/scripts/`: Sheet bağlantısı ve tarayıcı işlevleri
- `scripts/fingerprint.mjs`: JS birleştirme ve dosya hash’leri
- `public/assets/`: stiller, görseller ve üretilmiş çalışma zamanı
- `public/_headers`: Cloudflare cache başlıkları

Paket bağımlılık klasörü, geçici dosyalar, Sites proje kimliği veya gizli anahtar içermez.
