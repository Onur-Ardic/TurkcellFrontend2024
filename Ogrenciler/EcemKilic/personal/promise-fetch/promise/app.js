function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                1: { id:1, name: `ecem`},
                2: { id:2, name: `alpay`},
                3: { id:3, name: `şafak`}
            };
            const user = userData[userId];

            if(user) {
                resolve(user);
            } else {
                reject('işlemler başarısısz');
            }
        }, 2000);
    });
}

function userUpdt(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.name) {
                user.updt = true;
                resolve('kullanıcı bilgileri işlendi');
            } else {
                reject('işlenemedi')
            }
        }, 2000);
    })
}

getUser(4).then(user => {
    console.log('kullanıcı var');
    return userUpdt(user);
}).then(updt => {
    console.log(updt);
})
.catch(error => {
    console.log('hata', error);
})