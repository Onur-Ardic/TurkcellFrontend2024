const cookieName = 'username';
const cookieValue = 'John';

const expirationTime = 1 * 60 * 60 * 1000; //1 saat

const expirationDate = new Date(Date.now() + expirationTime);

// Çerez oluşturma
document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;

console.log('Çerez oluşturuldu.');