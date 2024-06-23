# NextJS Nedir? 
**_The React Framework for the Web_**
> Kendi web sayfasındaki bilgiye göre: *Next.js, React bileşenlerinin gücüyle yüksek kaliteli web uygulamaları oluşturmanıza olanak tanıyan bir framework.*
<details>
  <summary> Daha uzun bir tanım istiyorsak </summary>
  Next.js, React tabanlı bir framework olup, sunucu tarafında render etme (SSR) ve statik site üretme (SSG) gibi özellikler sunarak performansı ve SEO'yu artıran, modern web uygulamaları geliştirmeyi kolaylaştıran bir yapıdır. Next.js, kullanıcıların hem sunucu hem de istemci tarafında JavaScript ile çalışmasına olanak tanır, böylece esnek ve yüksek performanslı uygulamalar oluşturmayı sağlar.
 </details>

 # Framework Nedir?
*Bir framework, yazılım geliştirme sürecini kolaylaştıran, hızlandıran ve düzenleyen bir yapı veya araçlar topluluğudur. Frameworkler, belirli bir uygulama veya sistem türünü oluşturmak için gereken temel bileşenleri, kütüphaneleri, araçları ve en iyi uygulamaları içerir. Yazılım geliştirme süreçlerinde tekrar eden görevleri ve işlemleri otomatikleştirir, böylece geliştiricilerin daha hızlı ve verimli çalışmasına olanak tanır.*

#### Framework'lerin Temel Özellikleri
  * Kod Yeniden Kullanımı: Sık kullanılan işlevsellikleri ve yapı taşlarını içerir, bu sayede kodun tekrar tekrar yazılması gerekmez.
  * Standartlaştırma Belirli standartları ve kuralları belirler, böylece kodun tutarlılığı ve bakımı kolaylaşır.
  * Geliştirme Hızını Artırma: Hazır bileşenler ve kütüphaneler sayesinde geliştirme süreci hızlanır, çünkü temel işlevler önceden sağlanmıştır.
  * Bakım ve Güncelleme Kolaylığı: Standart yapılar ve modüler bileşenler sayesinde uygulamaların bakımı ve güncellenmesi daha kolay olur.
  * Topluluk ve Destek: Popüler frameworkler geniş bir topluluğa sahiptir, bu da geniş dokümantasyon, eğitim materyalleri ve topluluk desteği sağlar.

##### Avantajları:
  * Hızlı Geliştirme: Hazır bileşenler ve yapı taşları sayesinde projeler daha hızlı tamamlanır.
  * Daha Az Hata: Standartlaştırılmış yapılar ve en iyi uygulamalar, hata oranını düşürür.
  * Topluluk Desteği: Geniş topluluk ve dokümantasyon sayesinde sorunlar hızlıca çözülebilir.
  * Güvenlik: Birçok framework, güvenlik konusunda yerleşik önlemler sağlar.
##### Dezavantajları:
  * Öğrenme Eğrisi: Yeni bir framework öğrenmek zaman alabilir ve karmaşık olabilir.
  * Kısıtlamalar: Belirli kurallara ve yapıya uymak zorunda kalmak, esneklik kaybına neden olabilir.
  * Performans: Bazı durumlarda, framework kullanımı doğrudan kod yazmaktan daha yavaş olabilir.
---
# Routes
- Static Routes
- Dynmamic Routes
- Catch All Routes
- Dynamic Catch All Routes
---
# Rendering
> **Server Side Rendering(SSR):** Sayfaların her istekte sunucuda oluşturulması işlemidir. Sayfalar, kullanıcının isteği üzerine sunucuda render edilir. 
- **_Kullanım Alanları:_** Sık sık güncellenen veriler, kullanıcıya özel içerik.
- App klasörünün altına koyduğun herhangi bir klasör **server side rendering** olur.
- Sayfanda console.log yazdığında çıktısı eğer terminalde gözüküyorsa **SSR** ve **localindeki serverda render** olur. 
- Eğer app klasörünün dışarısında bir component'de buton tanımlayıp onu app'in içerisinde kullansan bile kullandığın yer app'in içerisi olduğu için bu da serverda render olmuş olur. *Nerede tanımladığın kadar nerede kullandığın da önemli.* 
- Eğer bir component ya da bileşen sadece ve sadece server tarafında çalışması gerekiyorsa ve client'da kullanıldığında hata vermesini istiyorsak NextJS bize server-only diye bir paket sunuyor. Bunu  [npm](https://www.npmjs.com/package/server-only ) ile kurup component'in başlangıcına ``import "server-only"`` yazarsak artık bu component sadece serverda çalışıyor olacaktır.
---
> **Client Side Rendering(CSR):** Sayfaların istemci tarafında render edilmesini işlemidir. Bu yöntem, sayfaların tarayıcıda dinamik olarak oluşturulmasını sağlar. 
- **_Kullanım Alanları:_** Kullanıcı etkileşimleri, anlık veri güncellemeleri.
- Bir bileşenin istemci tarafında çalışmasını sağlamak için componentin başına ``'use client'`` ekliyorsun. Bu durumda, bu bileşen ve içindeki diğer bileşenler istemci tarafında render ediliyor. Bunun için herhangi bir ek paket kurmana gerek yok
- SSR'da useState, useEffect gibi hookları kullanamıyorsun çünkü bunlar CSR'de çalışmaya gerek duyan kodlar. React'in geliştirilme mantığı ile alakalı kısaca. Eğer bunları kullanmaya çalışırsan hata alıyorsun. 
![useEffectNeedsCSR](https://i.ibb.co/ZGFfdv3/use-Effect-Needs-CSR.png "GitHub") &nbsp;
- Eğer 'server-only' ile belirttiğin bir bileşeni 'use client' ile tanımladığın bir component'de çalıştırmayı denersen de hata alırsın. Bu yüzden 'use client' ile belirlediğin ve buraya import ettiğin her şey sadece client da render olmalı. Bunun da çözümü için de o component'e props olarak children'i veriyorsun ve onu render ediyorsun ekrana.
- useEffect ile bir state'i manipüle ettiğimizde ilk render server'da alınacağı için server onun ilk değerini görecek ve useEffect ile değiştirilmiş güncel halini göremeyecek. Fakat ekranda bunu gösterebiliyor olacak. Sadece dev tools'da görünmeyecek. 
- Sayfa yüklenirken de ilk olarak ilk değer gözükecek daha sonra ise useEffect ile değiştirilen değeri ekranda gözüküyor olacak.
 ![use-Effect-Doesnt-Show-First-Look](https://i.ibb.co/DzZDn2M/use-Effect-Doesnt-Show-First-Look.png "GitHub")
---
> **Static Site Generation (SSG):** Sayfaların build zamanı sırasında statik HTML dosyalarına dönüştürülmesini sağlar. Bu sayfalar önceden oluşturulmuş ve sunucuda saklanmıştır. 
- **_Kullanım Alanları:_** Nadiren değişen içerikler, blog yazıları, ürün listeleri.
- Build Zamanı: Statik sayfalar build aşamasında oluşturulur ve daha sonra kullanıcıya sunulur.
- Tekrar Render Edilmez: Statik sayfalar bir kez oluşturulur ve her kullanıcıya aynı HTML gösterilir. Böylece verimlilik ve hız kazancı sağlanır.
---
> **Dynamic ve Static Rendering:** 
- **_Static Rendering:_** Sayfaların build zamanı sırasında oluşturulup statik HTML dosyalarına dönüştürülmesini içerir. Bu sayfalar, build aşamasında Next.js tarafından analiz edilir ve statik HTML dosyaları olarak üretilir.
- Örneğin, about gibi değişmeyen içeriklere sahip bir sayfa statik olarak render edilebilir. Build anında HTML çıktısı alınır ve bu sayfaya her girişte aynı HTML gösterilir.
*<ins>Özellikler</ins>:* 
  * Tek Seferlik Render: Statik sayfalar, sadece build sırasında bir kere render edilir ve daha sonra cachelenir.
  * Performans: Kullanıcının sayfayı her ziyaretinde sunucuda yeniden render edilmez, bu nedenle çok hızlı yüklenir.
  * Console.log: Build sırasında konsola log yazarsanız, bu çıktılar sadece build anında görülür. Sayfa çalıştırıldığında tekrar görülmez.

- **_Dynamic Rendering:_** Sayfaların her istekte sunucuda yeniden oluşturulmasını içerir. Bu sayfalar, dinamik verileri veya kullanıcıya özel içerikleri içerebilir.
- Örneğin, kullanıcının profili gibi sık sık değişen verileri içeren sayfalar dinamik olarak render edilir. Her kullanıcı isteğinde, sunucuda yeniden render edilerek güncel içerik sağlanır.
<ins>Özellikler</ins>:
  * Her İstek İçin Render: Dinamik sayfalar her istekte sunucuda yeniden oluşturulur.
  * Server Maliyeti: Bu sayfaların her seferinde yeniden oluşturulması, ek sunucu maliyeti gerektirir.
  * Console.log: Dinamik sayfalarda konsola log yazarsanız, her istekte bu çıktıları görebilirsiniz.

![dynamicandstaticrendering](https://i.ibb.co/hYd9TN9/dynamicandstaticrendering.png "GoToImage")

> **_Static Site Generation (SSG) ve Static Rendering aynı süreci ifade eder ve genellikle birbirinin yerine kullanılır. SSG, genellikle sürecin kendisini ve kullanılan araçları tanımlarken, Static Rendering sürecin sonucunu ve elde edilen statik HTML dosyalarını tanımlar. Her iki terim de modern web geliştirme pratiklerinde önemli bir yere sahiptir ve performans, SEO ve ölçeklenebilirlik açısından büyük avantajlar sağlar._**

### Kısa özet geçecek olursak:
* **Static Rendering**:
  - Sayfalar build zamanı oluşturulur.
  - Tekrar tekrar render edilmez, performanslıdır.
  - İçeriği nadiren değişen sayfalar için uygundur.
* **Dynamic Rendering**:
  - Sayfalar her istekte sunucuda yeniden oluşturulur.
  - Güncel veriler sunulur, ancak sunucu maliyeti yüksektir.
  - İçeriği sık sık değişen sayfalar için uygundur.
---  

