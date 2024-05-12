// Fonksiyon xox_oyunu():
//     Oyun_tahtası = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]  # 3x3 boş bir tahta oluşturulur
//     Oyun_sonu = False  # Oyunun bitip bitmediğini belirten bir değişken

//     While Oyun_sonu == False:
//         Oyun_tahtasını_göster(Oyun_tahtası)  # Oyun tahtası ekrana basılır
//         X_hamlesi(Oyun_tahtası)  # X oyuncusunun hamlesi yapılır
//         Oyun_sonu = Oyunu_kontrol_et(Oyun_tahtası)  # Oyunun bitip bitmediği kontrol edilir
//         Eğer Oyun_sonu == True ise:
//             Oyun_tahtasını_göster(Oyun_tahtası)  # Son durumu ekrana basılır
//             Durum_bildir("X kazandı!")  # X kazandı mesajı verilir
//             Break  # Döngüden çıkılır

//         Oyun_tahtasını_göster(Oyun_tahtası)  # Oyun tahtası ekrana basılır
//         O_hamlesi(Oyun_tahtası)  # O oyuncusunun hamlesi yapılır
//         Oyun_sonu = Oyunu_kontrol_et(Oyun_tahtası)  # Oyunun bitip bitmediği kontrol edilir
//         Eğer Oyun_sonu == True ise:
//             Oyun_tahtasını_göster(Oyun_tahtası)  # Son durumu ekrana basılır
//             Durum_bildir("O kazandı!")  # O kazandı mesajı verilir
//             Break  # Döngüden çıkılır

//     Durum_bildir("Oyun bitti!")  # Oyunun bittiği mesajı verilir

// Fonksiyon Oyun_tahtasını_göster(Oyun_tahtası):
//     For satır in Oyun_tahtası:
//         For eleman in satır:
//             Ekrana_yaz(eleman + " ")  # Tahtayı ekrana bas
//         Ekrana_yaz("\n")  # Yeni satıra geç

// Fonksiyon X_hamlesi(Oyun_tahtası):
//     Satır = Kullanıcıdan_satır_al()  # Kullanıcıdan satır bilgisini al
//     Sütun = Kullanıcıdan_sütun_al()  # Kullanıcıdan sütun bilgisini al
//     Eğer Oyun_tahtası[Satır][Sütun] boş ise:
//         Oyun_tahtası[Satır][Sütun] = "X"  # Belirtilen konuma X koy
//     Değilse:
//         Durum_bildir("Geçersiz hamle! Lütfen başka bir konum seçin.")
//         X_hamlesi(Oyun_tahtası)  # Tekrar hamle yap

// Fonksiyon O_hamlesi(Oyun_tahtası):
//     Rastgele_Satır = Rastgele_sayı_üret(0, 2)  # Rastgele bir satır seç
//     Rastgele_Sütun = Rastgele_sayı_üret(0, 2)  # Rastgele bir sütun seç
//     Eğer Oyun_tahtası[Rastgele_Satır][Rastgele_Sütun] boş ise:
//         Oyun_tahtası[Rastgele_Satır][Rastgele_Sütun] = "O"  # Belirtilen konuma O koy
//     Değilse:
//         O_hamlesi(Oyun_tahtası)  # Tekrar hamle yap

// Fonksiyon Oyunu_kontrol_et(Oyun_tahtası):
//     # Tahtada kazanan bir durum var mı kontrol et
//     Eğer Satır_kazananı(Oyun_tahtası, "X") veya Sütun_kazananı(Oyun_tahtası, "X") veya Köşegen_kazananı(Oyun_tahtası, "X"):
//         Return True
//     Eğer Satır_kazananı(Oyun_tahtası, "O") veya Sütun_kazananı(Oyun_tahtası, "O") veya Köşegen_kazananı(Oyun_tahtası, "O"):
//         Return True
//     # Tahta dolu mu kontrol et
//     Eğer Tahta_dolu_mu(Oyun_tahtası):
//         Return True
//     Return False

// Fonksiyon Satır_kazananı(Oyun_tahtası, oyuncu):
//     For satır in Oyun_tahtası:
//         Eğer satır[0] == oyuncu ve satır[1] == oyuncu ve satır[2] == oyuncu:
//             Return True
//     Return False

// Fonksiyon Sütun_kazananı(Oyun_tahtası, oyuncu):
//     For i in range(3):
//         Eğer Oyun_tahtası[0][i] == oyuncu ve Oyun_tahtası[1][i] == oyuncu ve Oyun_tahtası[2][i] == oyuncu:
//             Return True
//     Return False

// Fonksiyon Köşegen_kazananı(Oyun_tahtası, oyuncu):
//     Eğer (Oyun_tahtası[0][0] == oyuncu ve Oyun_tahtası[1][1] == oyuncu ve Oyun_tahtası[2][2] == oyuncu) veya (Oyun_tahtası[0][2] == oyuncu ve Oyun_tahtası[1][1] == oyuncu ve Oyun_tahtası[2][0] == oyuncu):
//         Return True
//     Return False

// Fonksiyon Tahta_dolu_mu(Oyun_tahtası):
//     For satır in Oyun_tahtası:
//         For eleman in satır:
//             Eğer eleman boş değil ise:
//                 Return True
//     Return False

// Fonksiyon Durum_bildir(mesaj):
//     Ekrana_yaz(mesaj + "\n")
