const arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
    const msg = arr.join('');
    return msg.endsWith('.') ? msg : msg.concat('.');
}

function p (arr){
    let mensaje = '';
    for (let i = 0; i < arr.length; i++) {
        mensaje = mensaje + arr[index] + " ";
    }
    return mensaje;
}
console.log(printOutString(arr));
console.log(p(arr));
