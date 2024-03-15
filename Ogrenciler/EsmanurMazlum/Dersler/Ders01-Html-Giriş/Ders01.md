# 1. Ders Notları 
HTML'e giriş yapıldı. 
Temel etiketler pratik yapıldı.

## HTML nedir? 
- Hyper Text Markup Language - metin işaretleme dilidir.
- Bir web sitesinin iskeletini oluşturur.
- Ana yapısında iki kısım vardır:
    - `<head></head>` tagları arasında css, meta tanımlamalar gibi bağlantılar yapılır. 
    - `<body></body>` tagları arasında ise web sayfasını oluşturan HTML kodları yazılır.

### HTML Etiketleri
1. #### h Etiketleri

`<h1> En büyük başlıktır </h1>`<br>
`<h2> İkinci büyük başlıktır </h2>`<br>
`<h3> Üçüncü büyük başlıktır </h3>`<br>
`<h4> Dördüncü büyük başlıktır </h4>`<br>
`<h5> Beşinci büyük başlıktır </h5>`<br>
`<h6> En küçük başlıktır </h6>`

2. #### p Etiketi

`<p> Paragraf tagıdır. Yazılarımızı bu tagın içine yazarız. Blok elementtir. </p>`

3. #### Inline ve Block Elementler
-   İnline elementler içeriği kadar yer kaplar.
-   Block elementler sayfa genişliği kadar yer kaplar
-   İnline elementlere örnek : `<a>, <b>, <br>, <button>, <i>, <img>, <input>, <label>, <select>, <strong> <textarea> `
-   Block elemntlere örnek : `<div>, <footer>, <form>, <h1>-<h6>, <header>, <hr>, <li> - <ol> - <ul>, <main>, <nav>, <p>, <section>`

4. #### HTML5 Elementleri
![](https://www.w3schools.com/html/img_sem_elements.gif) <br>
Bu elementler ile birlikte sayfa düzeni daha anlamlı olacaktır.

`<header>Başlık</header>` <br>
`<aside>Menü kısmı</aside>` <br>
`<main>Ana Bölüm</main>` <br>
`<section>Alt Bölüm</section>` <br>
`<footer>Son bölüm</footer>`

5. #### img Etiketi
`<img src="resim kaynağı" alt="resim açıklaması"/>` <br>
Fotoğraf eklememize yardımcı olur

6. #### a Etiketi
`<a href="www.google.com" target="_blank" >Link eklememizi sağlar</a>`<br>
target="_blank"- sayfamda daha çok kalmasını istediğim için yeni sayfaya yönlendiriyorum<br>

7. #### Liste Etiketleri

Ordered List sıralanmış liste anlamına gelir.

    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ol>

Aşağıdaki gibi görünür:

<ol>
	    <li>HTML</li>
	    <li>CSS</li>
	    <li>JavaScript</li>
	    <li>React</li>
    </ol>

Unordered List sırasız bir öğe listesini temsil eder.

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

Aşağıdaki gibi görünür:

 <ul>
	    <li>HTML</li>
	    <li>CSS</li>
	    <li>JavaScript</li>
    </ul>
img'de alt önemli