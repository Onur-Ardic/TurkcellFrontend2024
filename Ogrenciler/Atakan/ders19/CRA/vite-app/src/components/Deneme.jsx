import PropTypes from "prop-types"; // PropTypes, bileşenin prop tiplerini belirtmek için kullanılır
import { useState } from "react"; // useState, bileşen içinde state yönetimi için kullanılır

// Deneme adında bir fonksiyon bileşeni tanımlanıyor
const Deneme = ({
  isim = "İsimi bilgisi girilmedi", // props'tan gelen isim değeri, varsayılan olarak "İsimi bilgisi girilmedi" olacak
  yas = "Yaş bilgisi girilmedi", // props'tan gelen yas değeri, varsayılan olarak "Yaş bilgisi girilmedi" olacak
}) => {
  // useState hook'u ile bir count state'i oluşturuluyor, başlangıç değeri 0
  const [count, setCount] = useState(0);

  return (
    // JSX sözdizimi kullanılarak bileşenin görünümü tanımlanıyor
    <>
      <div>{isim}</div> {/* props'tan gelen isim değeri görüntüleniyor */}
      <div>{yas}</div> {/* props'tan gelen yas değeri görüntüleniyor */}
      <div>{count}</div> {/* count state'i görüntüleniyor */}
      {/* Buton, tıklama olayına bağlı olarak count state'ini arttıracak bir fonksiyonu çağırır */}
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </>
  );
};

// PropTypes ile bileşenin prop tipleri belirtiliyor
Deneme.propTypes = {
  isim: PropTypes.string.isRequired, // isim prop'unun bir string olması gerektiği belirtiliyor
  yas: PropTypes.string, // yas prop'unun bir string olması gerektiği belirtiliyor
};

export default Deneme; // Bileşen dışa aktarılıyor, bu sayede başka bileşenler tarafından kullanılabilir hale geliyor
