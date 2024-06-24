
getAlldata() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", this.apiUrl, true);
  xhr.onload = () => {
      if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const limitedData = data.slice(0, 20);
          this.renderCards(limitedData);
      } else {
          console.error("Bir hata oluştu, veriler alınamadı.");
      }
  };
  xhr.send();
}
