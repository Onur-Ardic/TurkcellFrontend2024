# Viking Vare
---
## Nedir ?
Bütün tüccarların bir araya gelerek oluşturduğu bir satış platformudur. Burada tek ödeme yöntemi olarak altın geçerlidir. Teslimatlar Kattegat gezginleri tarafından yapılmaktadır. Viking Vare'nin teslimat günü at yolculuğu baz alınarak at yol günü olarak belirlenmiştir.

## Viking Vare'in Hikayesi
Vikingler ile aynı dönemde yaşadığımız düşünülerek tasarlanmıştır. Fakat burada bütün vikingler kendi içleri içerisinde barış içindedirler. Ticaretin merkezi olan "Kattegat" işlerini açmak amacıyla böyle bir çözüm geliştirdi. Kattegat'da bulunan bütün tüccarlar, demirciler, ahşap ustaları satışlarını bir platformdan yapmaya karar verdiler ve Viking Vare bu şekilde doğmuş oldu. Vikingler buradan alışveriş yaparak kendi ekipmanlarını tamamlayacaklardır. Bütün dünyayı fethederek savaşı tamamen bitirmeyi ve tek krallık yönetimine geçmeyi amaçlamaktadırlar.

---
# Geliştirme Aşamaları
---
## Tasarımın Belirlenmesi

- Ben bir viking hayranı olarak bu tasarımı hızlı bir şekilde düşündüm ve hemen araştırmalarımı yapmaya başladım.
- Renk paleti olarak colorhunt üzerinden [Colorhunt Renk Paletim](https://colorhunt.co/palette/222831393e46d65a31eeeeee) bu renk paletini seçtim. Aldığım geri dönüşler üzerine buradaki #D65A31 kodlu rengi #C69749 ile değiştirdim.
- [Elements Envato](https://elements.envato.com/) üzerinden ikon paketimi ve kullanmak üzere ürün resimleri, arka plan resimlerimi aldım.
- Figma kullanmayı bilmediğim için bir viking gibi düşünerek ilkel yollara başvurarak maksimum verim almaya çalıştım ve excalidraw üzerinde düşüncelerimi ve hayal ettiğim görünümü bir taslağa dökmeye çalıştım.
[Tasarım için tıklayınız.](https://excalidraw.com/#json=cvH0mVWIpNt--YzpCLvLH,g8qfbzRnO_kuLAq5pptRFA)

## Geliştirme Ortamının Kurulması

- Dosya yapımı belirledim ve dosyalarımı oluşturdum.
- npm ile bootstrap ve sass yükledim.
- Bootstrap içerisindeki js dosyalarını kullandım. Bunlarıda "/node_modules" içerisinden gerekli sayfalarıma import ettim.

## Eğlenceli Bölüm Tasarımın Koda Dökülmesi :)

- Burada aklıma gelen farklı fikirlerden dolayı bazı yerlerde tasarımın dışına çıktım.
---
# Genel Değerlendirme
----

## Sayfalarım

- Anasayfa
- Hakkımızda
- Ürünler
- Sıkça Sorulan Sorular
- İletişim

- 9 adet ürün belirledim. Bu ürünlerin sayfaları mevcut.

## Mobil ve Masaüstü Referans Değerim

- 768px altı mobil görünüm
- 768px üzeri masaüstü görünüm

## SCSS ile kullandığım yapılar

- Variable
- Mixin
- Nested
- Extend