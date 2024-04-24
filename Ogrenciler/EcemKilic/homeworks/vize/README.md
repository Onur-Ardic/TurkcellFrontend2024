**# SEMPER Nedir?**

SEMPER bir tur acentesi için alışveriş sitesidir.

Bu şirket arttırılmış gerçeklik teknolojisini ve materyallerini kullanarak müşterilerine geçmiş - gelecek farketmeksizin zamandan bağımsız tur deneyimleri satmayı hedefliyor.


**## Neden Bu Fikir'i Seçtim?**

Gelişen teknoloji ve dünya devi markaların yeni lanse ettiği ürünler ile bugün bile gerçekleştirilebileceğini düşündüğüm bu fikir, daha önce hiçbir yerde karşıma çıkmadı.

Herkes için yenilikçi olan bu duruma insanların ilgisini çekmek ve bir gün bu fikrin hayata geçirilmesini hedefliyorum. Bu şekilde ufkumuzu genişletebilir ve yaşadığımız zamanın dışına çıkabiliriz.


**# Projede Kullanılan Teknolojiler:**

1. Html
2. CSS / Scss
3. Bootstrap


**# Kullanıcı Arayüzleri:**

1. Ana Sayfa
2. Hakkımızda Sayfası
3. Sıkça Sorulan Sorular Sayfası
4. Ürün Sayfaları


**# Projenin Teknik Yapısı:**

Proje oluşturulurken bootstrap'ten ve col yapısından oldukça faydalandım. Bunun yanında responsive yapıyı oluşturmak için flex ve grid yapılarını da yer yer kullandım.

JavaScript kullanmamak için slider ve navbar gibi kısımları özelleştirdim. Bunu yaparken de bolca animasyon kullanmaya çalıştım.

Scss kullanımımda variable, nested, mixin, extend gibi yapıları kullanmaya özen gösterdim.

Kod yapımın daha düzenli olması için her sayfaya özel stil sayfaları (urun.scss , hakkimizda.scss , sorular.scss) oluşturarak başladım. Bazı sayfalarda (hakkımızda, sorular) Html sayfam dışında bir stil özelleştirmesi yapmadığım için stil dosyalarını kullanmadım ve kaldırdım.


**# Projeyi Çalıştımak İçin Yapılması Gerekenler:**

1. Visual Studio Code kullanarak projeyi açın
2. Uygulamanın terminalini açın
    1. npm init --y
    2. npm i bootstrap
    3. npm i sass
    komutlarını yazın ve package.json dosyanızdaki scripts kısmını aşağıdaki gibi değiştirin
        "sass": "sass -w scss:css"
    tekrar terminale dönüp 
    4. npm run sass
    komutuyla çalıştırabilirsiniz