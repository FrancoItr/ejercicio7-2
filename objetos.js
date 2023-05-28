//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Franco",
    apellido: "Iturri",
    edad: 30,
    altura: 1.76,
    eresDesarrollador: true
};

//- Una variable que obtenga tu edad a partir del objeto anterior
let años = datosPersonales.edad
console.log(años);

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosAmigo1 = { ...datosPersonales };
datosAmigo1.nombre = "Emmanuel";
datosAmigo1.apellido = "Villalba";
datosAmigo1.edad = 26;
datosAmigo1.altura = 1.77;
datosAmigo1.eresDesarrollador = false;

const datosAmigo2 = { ...datosPersonales };
datosAmigo2.nombre = "Valeria";
datosAmigo2.apellido = "Glibota";
datosAmigo2.edad = 29;
datosAmigo2.altura = 1.82;
datosAmigo2.eresDesarrollador = false;

console.log(datosAmigo1);
console.log(datosAmigo2);

const listaPersonas = [datosPersonales, datosAmigo1, datosAmigo2];
console.log(listaPersonas);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const personasOrdenado = listaPersonas.sort((a, b) =>   a.edad - b.edad);

console.log(personasOrdenado);
