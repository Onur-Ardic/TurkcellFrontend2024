*var ile let arasındaki farklar:
    -Kapsam (Scope): var anahtar kelimesi, fonksiyon kapsamında (function scope) tanımlanırken, let anahtar kelimesi blok kapsamında (block scope) tanımlanır. Blok kapsamı, bir if bloğu, for döngüsü veya herhangi bir başka blok yapısı içinde tanımlanan değişkenlerin sadece o blok içinde geçerli olduğu anlamına gelir.

    -Tekrar Tanımlama: var ile tanımlanan bir değişken aynı kapsam içinde tekrar tanımlanabilirken, let ile tanımlanan bir değişken tekrar tanımlanamaz.

    -Değişkenin İlk Değer Ataması: var ile tanımlanan bir değişken, tanımlandığı yerde başlangıç değeri olmadan bırakılabilir ve varsayılan olarak undefined olur. let ile tanımlanan bir değişken ise tanımlandığı yerde başlangıç değeri olmadan bırakılamaz.

*Scope nedir?
    -JavaScript'te kapsam (scope), bir değişkenin erişilebilir olduğu alanı tanımlar. Kapsam, değişkenin nerede tanımlandığına ve nasıl erişilebileceğine bağlıdır. JavaScript'te iki temel kapsam türü vardır: global kapsam (global scope) ve yerel kapsam (local scope).

    -Global Kapsam (Global Scope): Global kapsam, bir JavaScript dosyasının en üst düzeyinde veya bir fonksiyonun dışında tanımlanan değişkenler için geçerlidir. Global değişkenler, kodun herhangi bir yerinden erişilebilir.

    -Yerel Kapsam (Local Scope): Yerel kapsam, bir fonksiyon içinde tanımlanan değişkenler için geçerlidir. Yerel değişkenler, tanımlandıkları fonksiyonun dışında erişilemezler.

    Kapsamlar, iç içe geçmiş olabilir. İç kapsam, dış kapsamın değişkenlerine erişebilir, ancak dış kapsam iç kapsamdaki değişkenlere erişemez.

*Hoisting nedir?
    -JavaScript'te hoisting, değişken ve fonksiyon tanımlamalarının derleme aşamasında kodun başına taşınması anlamına gelir. Bu, bir değişkenin veya fonksiyonun tanımlanmadan önce kullanılabilmesini sağlar.

    -Örneğin, bir değişkeni tanımlamadan önce kullanmaya çalışırsanız, JavaScript bu değişkeni yukarı taşır (hoist) ve tanımlama satırınızın üstüne koyar:

    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5

    Yukarıdaki kod aslında şu şekilde yorumlanır:

    var x;
    console.log(x); // undefined
    x = 5;
    console.log(x); // 5

*Tip Dönüşümleri

    -Otomatik Dönüşüm (Implicit Conversion): JavaScript, bazı durumlarda veri tiplerini otomatik olarak dönüştürür. Bu durumlar genellikle operatörlerin kullanımı sırasında ortaya çıkar.
 
    // Number + String
    let num = 10;
    let str = '5';
    let result = num + str; // '105' (num otomatik olarak stringe dönüştürüldü)

    // Boolean + Number
    let bool = true;
    let num = 1;
    let result = bool + num; // 2 (bool otomatik olarak 1'e dönüştürüldü)

    -Açık Dönüşüm (Explicit Conversion): Veri tiplerini açıkça dönüştürmek için bazı yöntemler vardır.
    Number(): Bir değeri sayıya dönüştürmek için kullanılır.
    let str = '10';
    let num = Number(str); // 10

    parseInt() ve parseFloat(): Bir stringi tamsayıya (parseInt()) veya ondalık sayıya (parseFloat()) dönüştürmek için kullanılır.
    let str = '10.5';
    let num = parseFloat(str); // 10.5

    -String(): Bir değeri stringe dönüştürmek için kullanılır.
    let num = 10;
    let str = String(num); // '10'

    -Boolean(): Bir değeri boolean'a dönüştürmek için kullanılır.
    let value = 0;
    let bool = Boolean(value); // false

    -Veri Türü Karşılaştırması (Type Coercion): JavaScript, karşılaştırma operatörlerinde veya mantıksal operatörlerde veri türlerini otomatik olarak dönüştürebilir.

    console.log(1 == '1'); // true
    console.log(1 === '1'); // false (katı eşitlik, veri türünü de kontrol eder)

*Operatörler
    Aritmetik Operatörler: Sayılar üzerinde matematiksel işlemler yapmak için kullanılır.
    +: Toplama operatörü.
    -: Çıkarma operatörü.
    *: Çarpma operatörü.
    /: Bölme operatörü.
    %: Modülüs (kalan) operatörü.

    Atama Operatörleri: Değişkenlere değer atamak için kullanılır.
    =: Değer atama operatörü.
    +=, -=, *=, /=: Toplama, çıkarma, çarpma ve bölme operatörleriyle birlikte atama.

    Karşılaştırma Operatörleri: Değerleri karşılaştırmak için kullanılır ve genellikle bir boolean sonuç döndürür.
    ==, ===: Eşitlik karşılaştırması (katı eşitlik ve gevşek eşitlik).
    !=, !==: Eşit olmayanlık karşılaştırması.
    >, <: Büyüklük ve küçüklük karşılaştırmaları.
    >=, <=: Büyük eşitlik ve küçük eşitlik karşılaştırmaları.

    Mantıksal Operatörler: Mantıksal ifadeleri birleştirmek veya değiştirmek için kullanılır ve genellikle bir boolean sonuç döndürür.
    &&: Ve (and) operatörü.
    ||: Veya (or) operatörü.
    !: Değil (not) operatörü.

    Arttırma ve Azaltma Operatörleri: Bir sayıyı arttırmak veya azaltmak için kullanılır.
    ++: Arttırma operatörü.
    --: Azaltma operatörü.

    Üçlü (Ternary) Operatörü: Koşullu ifadeler için kullanılır ve bir koşulu değerlendirir.
    condition ? expr1 : expr2: Eğer koşul doğruysa expr1'i, değilse expr2'yi döndürür.
    JavaScript'te operatörlerin öncelik sırası vardır. Örneğin, çarpma ve bölme operatörleri toplama ve çıkarma operatörlerinden önce işlem yapar.

*Math Fonksiyonları
    JavaScript'te Math nesnesi, matematiksel işlemler yapmak için kullanılan bir dizi yöntem ve sabit içerir. Math nesnesi, özellikle karmaşık matematiksel işlemler gerektiren durumlarda yararlıdır. Math nesnesinin bazı sık kullanılan yöntemleri:

    -Math.round(): Bir sayıyı en yakın tam sayıya yuvarlar.
    Math.round(2.5); // 3
    Math.round(2.1); // 2

    -Math.floor(): Bir sayıyı aşağı doğru en yakın tam sayıya yuvarlar.
    Math.floor(2.9); // 2

    -Math.ceil(): Bir sayıyı yukarı doğru en yakın tam sayıya yuvarlar.
    Math.ceil(2.1); // 3

    -Math.abs(): Bir sayının mutlak değerini döndürür.
    Math.abs(-5); // 5

    -Math.max() ve Math.min(): Verilen sayıların en büyüğünü (max()) veya en küçüğünü (min()) döndürür.
    Math.max(2, 5, 1); // 5
    Math.min(2, 5, 1); // 1

    -Math.random(): 0 ile 1 arasında rastgele bir ondalık sayı döndürür.
    Math.random(); // Örnek: 0.547573281039014

    -Math.pow(): Bir sayının üssünü alır.
    Math.pow(2, 3); // 8 (2^3)

    -Math.sqrt(): Bir sayının karekökünü alır.
    Math.sqrt(9); // 3