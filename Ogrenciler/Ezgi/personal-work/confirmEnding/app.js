const confirmEnding = (str, target) => {
    
    let endOfString = str.slice(-target.length); //sağdan başlarken -1 ile başlıyor.
    
    if (endOfString === target) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Merhaba dünya", "dünya"))
console.log(confirmEnding("Merhaba Javascript", "Script"))
