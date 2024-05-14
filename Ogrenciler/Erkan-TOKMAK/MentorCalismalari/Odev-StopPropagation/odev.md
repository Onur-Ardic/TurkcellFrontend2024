# StopPropagation Nedir ?

Geçerli olayların durdurulmasını sağlar. Örnekte yapıldığı gibi sadece checkbox işaretlendi konsolda yazmaktadır. 
Eğer orada stopPropagation kullanmamış olsaydık; "div 1 tıklandı.", "div 2 tıklandı." , "checkbox işaretlendi" çıktılarını konsolda görecektik.
stopPropagation nesneye bağlanan başka dinleyicilerin eventlerini durdurmaz. O nesneye bağlanan diğer dinleyicilerin eventlerini durdurmak için 
stopImmediatePropagation kullanırız.
