# Ders 03 Notlarım
HTML etiketleri ile HTML Semantic tablosu oluşturuldu.<br>
CSS'e giriş yapıldı ve syntax'ı öğrenildi.<br>
Bir HTML dosyasına nasıl CSS entegre edildiği öğrenildi.

## HTML Semantic Elementleri 
Temel CSS kodları ile oluşturuldu.<br>
![Tablo](/Ogrenciler/EsmanurMazlum/Dersler/Ders03-Html-Uyg-Css-Giriş/HtmlSemantic/html-semantics.png)
<br>
HTML etiketlerini bu yapıya göre kurmak web sitemiz için daha anlamlı ve kullanışlı olacaktır.


## CSS'e Giriş
### CSS Nedir

CSS, HTML yapılarına özellik eklememizi sağlayan yapıdır. HTML bir iskelet dersek CSS bizim dış görünüşümüz olur. 

### CSS'i nasıl kullanırız?
CSS'i HTML dosyasında kullanmak için 3 farklı yöntem bulunmaktadır:
- Inline CSS,
- Internal CSS,
- External CSS

#### Inline CSS
Sadece stil değiştirmek istediğimiz HTML etiketi içerisinde style attribute'u ile kullanırız. Bu kullanım şekli sadece bu h1 etiketini etkilemektedir.<br>
 
    <h1 style="color:blue;text-align:center;">This is a heading</h1>

#### Internal CSS
Sayfalar hakkında genel bilgilerin bulunduğu head etiketinin içerisine yazılır. `<style></style>` etiketleri içerisine yazılmalıdır. <br>
Stilini değiştirmek istediğimiz yapıya göre syntax'ı değişir.
##### Etiket için;
Hangi etiket için kullandığımızı yazıp süslü parantez içerisinde özellikleri yazarız. 
    
    <head>
      <style>
        body { 
            -background-color: linen;
        }
        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>
    </head>
    <body>

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

    </body>

##### Sınıf için;
Aynı stilin birçok etikette bulunmasını isteyebiliriz. Bu durumda etiket içerisinde bir sınıf tanımlarız ve . kullanarak özelliklerini gireriz.

    <head>
      <style>
        .pinkColor { 
            -background-color: pink;
        }
    </style>
    </head>
    <body>

        <h1 class="pinkColor">This is a heading</h1>
        <p class="pinkColor">This is a paragraph.</p>

    </body>

##### Id için;
Belli bir stilin belirli etiketlerde olmasını isteyebiliriz. Bu durumda hem özel olabilir hem de benzer etiketlerde duruma göre kullanılabilir. 

    <head>
      <style>
        #linenColor { 
            -background-color: linen;
        }
    </style>
    </head>
    <body>

        <h1 id="linenColor">This is a heading</h1>
        <p>This is a paragraph.</p>

    </body>

#### External CSS
CSS kodlarının bulunduğu dosyanın dizinini HTML head etiketleri arasına link etiketi sayesinde eklenerek kullanılır.
    
    <head>
        <link rel="stylesheet" href="style.css">
    </head>

#### Öncelik Sırası Nasıldır?
Etiketler üzerinde önce <strong>Inline css</strong> özelliği etkili olur.<br>
Ardından id tanımı varsa o özellik önceliklendirilir. <br>
Sonrasında class tanımı olan özellik<br>
ve en son da tagların kendisi ile tanımlanmış özellikler uygulanır. <br>
Genel anlamda bakacak olursak öncelik sırası :
- Inline
- Internal
- External <br>
şeklinde olur
