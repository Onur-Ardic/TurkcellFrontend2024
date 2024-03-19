# Ders 02 Notlarım

Html'de table ve form tagleri ile çalışıldı.<br>
Farklı input çeşitleri ile pratik yapıldı.

## 1. Table Etiketleri

`<table>` ---> Tablo oluşturmamızı sağlar.<br>
`<thead>` ---> Tablonun başlıklarını içerisine yazarız.<br>
`<tr>` ------> Tablodaki hücrenin satırdaki sırasını temsil eder.<br>
`<th>` ------> Tablonun başlık hücrelerini içerir.<br>
`<tbody>` ---> Tablonun içeriğini bu etiket içerisine yazarız.<br>
`<td>` ------> Tablonun içeriğindeki hücreleri temsil eder.

    <table >
      <thead>
        <tr>
            <th>İsim</th>
            <th>Soyisim</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Esmanur</td>
            <td>Mazlum</td>
        </tr>
      </tbody>
    </table>

Kodun çıktısı bu şekilde:

<table >
      <thead>
        <tr>
            <th>İsim</th>
            <th>İsim</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Esmanur</td>
            <td>Mazlum</td>
        </tr>
      </tbody>
</table>

## 2. Form Etiketleri

Html'de form işlemleri yapmamızı sağlar.

`<form>` ---> En dıştaki etikettir. Form yapısını bu etiket içerisinde kullanmalıyız.<br>
`<input>` --> Kullanıcıdan input alan etikettir. Çeşitli özellikleri vardır. Bu özellikler ile daha efektif kullanılır. 

### input etiketi özellikleri:
`<input type="text">` ---> <input type="text" id="name"><br>
`<input type="date">` --->  <input type="date" id="birth"> // Dilerseniz minimum ve maximum değer ekleyebiliyorsunuz.<br>
`<input type="datetime-local">` ---> <input type="datetime-local" id="birthdaytime" name="birthdaytime">//Doğum günü ve saat ekleyebiliyorsunuz
`<input type="number">` ---> <input type="number" id="quantity" name="quantity" min="1" max="100"> // Sayı girebiliyorsunuz.<br>
`<input type="email">` ---> <input type="email"> //Email formatında girmelisiniz. <br>
`<input type="password">` ---> <input type="password"> //Girdiğiniz input görünmez
`<input type="tel">` ---> <input type="tel" placeholder="555-555-5555" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>//Telefon numarası girebilirsiniz. <br>
`<input type="radio">`--->           <label for="women">Kadın</label>
            <input type="radio" id="women" name="gender">
            <label for="men">Erkek</label>
            <input type="radio" id="men" name="gender"> // İki seçenekten birini seçebiliyorsunuz.<br>
`<input type="checkbox">` --->           <label for="python">Python</label>
            <input type="checkbox" id="python">
            <label for="csharp">C#</label>
            <input type="checkbox" id="csharp"> //Birden fazla seçenek seçebiliyorsunuz<br>

`<input type="file">` ---> <input type="file">//Dosya ekleyebiliyorsunuz.<br>
`<textarea name="text" id="text" cols="30" rows="10">` ---> <textarea name="text" id="text" cols="5" rows="5"></textarea> // Büyük text alanı ekleyebiliyorsunuz.<br>
`<input type="range" id="vol" name="vol" min="0" max="50">` ---> <input type="range" id="vol" name="vol" min="0" max="50"> // Değer aralığı girebiliyorsunuz.<br>
`<input type="url">` ---> <input type="url"> //Url eklemeniz gerekiyor.<br>
`<input type="color">` ---> <input type="color"> //Renk seçebiliyorsunuz. <br>
`<input type="reset"` --->  <input type="reset" value="Reset"/> //Formu resetleyebiliyorsunuz <br>
`<input type="submit"` --->  <input type="submit" value="Gönder"/> //Formu gönderebiliyorsunuz