const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Imprimir todas las personas
people.map( p => console.log(p));

//Eliminar a Dani
let removed = people.splice(1, 1);
console.log(people);

//Eliminar Juan
removed = people.splice(2, 1);
console.log(people);

//Luis al frente 
removed = people.splice(1,1);
people.unshift(...removed)
console.log(people);

//Agregar mi nombre al final
people.push('Leonardo');
console.log(people);

//Iterar dentro de array y salir cuando sea igual a Maria 
for (let index = 0; index < people.length; index++) {
    if (people[index] == 'Maria') {
        break;
    }
    console.log(people[index])
}

//Obtener el index de Maria
console.log('El indice de Maria es: '+people.indexOf('Maria'));