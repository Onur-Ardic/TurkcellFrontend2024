# Kütüphane Projesi

Bu projede, kütüphane uygulaması geliştirilmiştir. Proje, modern web geliştirme teknikleri ve araçları kullanılarak oluşturulmuştur. Aşağıda projenin detayları ve yapılan işlemler adım adım açıklanmaktadır.

## Proje Özeti

- **OOP Kullanımı:** Proje, Class kullanılarak OOP mantığıyla geliştirilmiştir.
- **Veri Girişi:** Kullanıcıdan kitap adı, yazarı, kategori, yazıldığı tarih ve kapak görsel URL'i gibi bilgilerin girilmesi istenmiştir.
- **Veri Depolama:** Bu bilgiler, JSON Server kullanılarak saklanmıştır.
- **Ön Yükleme:** Sayfa yüklendiğinde, on tane sabit içerik development aşamasında önceden girilmiştir.
- **Listeleme:** Kitap koleksiyonunu listeleyebileceğimiz bir bölüm oluşturulmuştur.
- **Filtreleme:** Kategori ve yazar bazlı filtreleme yapılabilmektedir.
- **Sıralama:** Kitaplar A-Z, Z-A ve tarih sırasına göre sıralanabilmektedir.
- **Arama:** Kitap adı veya yazar adı bazlı arama yapılabilmektedir.
- **CRUD İşlemleri:** Kitaplar üzerinde silme ve güncelleme işlemleri yapılabilmektedir.
- **Veri İstekleri:** İstekler JSON Server'a Fetch API kullanılarak yapılmıştır.
- **Tasarım:** Projenin tasarımı Bootstrap kullanılarak yapılmıştır.

## Yapılan Çalışmalar

### 1. Proje Yapısının Oluşturulması
- Proje dosya ve klasör yapısı oluşturuldu.
- Gerekli kütüphaneler ve bağımlılıklar (Bootstrap, JSON Server vb.) yüklendi.

### 2. OOP Yapısının Oluşturulması
- `Book` sınıfı oluşturuldu.
- Kitap nesnelerinin oluşturulması ve yönetilmesi için gerekli metodlar tanımlandı.

### 3. Kullanıcıdan Veri Girişi
- Modal içerisinde input alanları oluşturuldu.
- Kullanıcıdan kitap adı, yazarı, kategori, yazıldığı tarih ve kapak görsel URL'i bilgileri alındı.

### 4. JSON Server Kullanımı
- JSON Server kuruldu ve yapılandırıldı.
- Girilen kitap bilgileri JSON Server'da saklandı.
- Sayfa yüklendiğinde on tane sabit kitap bilgisi JSON dosyasına eklendi.

### 5. Listeleme ve Tasarım
- Kitap koleksiyonu listeleme bölümü oluşturuldu.
- Bootstrap kullanılarak modern ve şık bir tasarım yapıldı.

### 6. Filtreleme ve Sıralama
- Kategori ve yazar bazlı filtreleme işlemleri gerçekleştirildi.
- Kitaplar A-Z, Z-A ve tarihe göre sıralanacak şekilde düzenlendi.

### 7. Arama Fonksiyonu
- Kitap adı veya yazar adı bazlı arama fonksiyonu eklendi.

### 8. CRUD İşlemleri
- Kitaplar üzerinde silme ve güncelleme işlemleri yapıldı.
- Kullanıcı arayüzü üzerinden bu işlemler rahatlıkla gerçekleştirilebilecek şekilde düzenlendi.

### 9. Fetch API Kullanımı
- JSON Server'a veri istekleri Fetch API kullanılarak yapıldı.
- Veri alma, ekleme, güncelleme ve silme işlemleri Fetch API ile gerçekleştirildi.