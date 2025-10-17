//1
function saludo(){
    alert("¡Bienvenido!")
}

//2
let num1, num2;
function calculoMayor(){
    num1= prompt("Ingrese un numero");
    num2= prompt("Ingrese otro numero");
    if(num1>num2){
        alert("El numero mayor es: "+num1);
    }else if (num1<num2){
        alert("El numero mayor es: "+num2);
    }else {
        alert("Los numeros son iguales")
    }
}

//3
function facturacion() {
    let monto = parseFloat(prompt("Ingrese el monto del producto"));
    let mediopago = prompt("Ingrese el medio de pago: C (crédito), E (efectivo), D (débito)").toUpperCase();
    let montofinal;

    if (monto < 200) {
        montofinal = monto;
    } else if (monto >= 200 && monto <= 400) {
        switch (mediopago) {
            case "C":
                montofinal = monto * 0.90; 
                break;
            case "E":
                montofinal = monto * 0.70; 
                break;
            case "D":
                montofinal = monto * 0.80;
                break;
        }
    } else { 
        montofinal = monto * 0.60; 
    }

    alert("Monto final a abonar es: $" + montofinal.toFixed(2));

    return montofinal;
}

//4
function IterarArray(array) {
    for (const elemento of array) {
      console.log(elemento);
    }
  }
  
  const flores = ["rosas", "tulipanes", "girasoles", "lirios"];
  const comidas = ["empanadas", "milanesas", "fideos", "tacos"];
  const deportes = ["voley", "fútbol", "jockey", "bascket"];
  
  IterarArray(flores);
  IterarArray(comidas);
  IterarArray(deportes);
  
//5
function tirarDados() {
    let numero = Math.floor(Math.random() * 6) + 1;
    alert("🎲 Salió el número: " + numero);
}

//6
let clickcount = 0;
function contadorclicks(){ 
    clickcount++;
    console.log("Hiciste click " + clickcount + " veces.");
}

// 7_Mis primeros pasos en Manipulación del DOM
function manipularDom() {
    // Mira el textContent del h1 en la consola
    const h1 = document.querySelector('h1');
    console.log('Texto original del h1:', h1.textContent);
  
    // Dale un nuevo texto al h1
    h1.textContent = "Estoy agregando un nuevo texto";
  
    //Elegí el primer párrafo y agregale un <span> dentro
    const primerParrafo = document.querySelector('p');
    primerParrafo.innerHTML = "<span>Estoy aprendiendo a manipular el DOM</span>";
  
    //Mirá por consola el innerHTML del segundo ul
    const segundaLista = document.querySelector('#lista2');
    console.log('Contenido del segundo ul:', segundaLista.innerHTML);
     //Cambiá el color de fondo del h1 a amarillo
  h1.style.backgroundColor = 'yellow';

  //Agregá la clase .subtitulos a todos los h2
  const subtitulos = document.querySelectorAll('h2');
  subtitulos.forEach(h2 => h2.classList.add('subtitulos'));

  //Quitá la clase .estilo-letras de los elementos que la tengan
  const elementosConEstilo = document.querySelectorAll('.estilo-letras');
  elementosConEstilo.forEach(el => el.classList.remove('estilo-letras'));
}

//9
// 1) Seleccionamos el botón por su id
const boton = document.getElementById("punto9");

// 2) Evento click: cambia el texto a "Desactivado"
boton.addEventListener('click', () => {
  boton.textContent = 'Desactivado';
});

// 3) Evento mouseenter: cuando entra el cursor, cambia el color a verde
boton.addEventListener('mouseenter', () => {
  // aplicamos estilo inline para que se vea inmediatamente
  boton.style.backgroundColor = 'green';
});

// 4) Evento mouseleave: cuando sale el cursor, volvemos al color predeterminado en CSS
boton.addEventListener('mouseleave', () => {
  // quitamos el estilo inline -> vuelve a aplicarse el background-color definido en CSS (red)
  boton.style.backgroundColor = '';
});
//10
function mostrarDatos() {
    const inputUsuario = document.querySelector('#usuario');
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
  
    const valorUsuario = inputUsuario.value;
    const valorNombre = inputNombre.value;
    const valorEmail = inputEmail.value;
  
    const mensaje = `Estos fueron los datos ingresados:
Usuario: ${valorUsuario}
Nombre: ${valorNombre}
Mail: ${valorEmail}`;
  
    alert(mensaje);
}
//11
const toDoList = {
    "tipo de tarea": "Compras",
    dia: "domingo",
    productos: ["Manteca", "Dulce de Leche"],
    "cantidad de productos": 2,
    estado: "pendiente",
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!");
    }
};
function punto11() {
    console.log("Día de la compra: ", toDoList.dia);
    console.log("Tipo de tarea: ", toDoList["tipo de tarea"]);
    console.log("Cantidad de productos: ", toDoList["cantidad de productos"]);
    toDoList.notificacion();
}

//12
const superHeroes ={
    "squadName" : "Super Hero Squad", "homeTown" : "Metro City", "formed" : 2016,
    "secretBase" : "Super tower", "active" : true,
    "members" : [
    {
    "name" : "Molecule Man", "age" : 29,
    "secretIdentity" : "Dan Jukes", "powers" : [
    "Radiation resistance", "Turning tiny", "Radiation blast"
    ]
    },
    {
    "name" : "Madame Uppercut", "age" : 39,
    "secretIdentity" : "Jane Wilson", "powers" : [
    "Million tonne punch", "Damage resistance", "Superhuman reflexes"
    ]
    }
    ]
    }

    // 1️⃣ Valor de squadName
console.log(superHeroes.squadName); // "Super Hero Squad"

// 2️⃣ Valor que dice "Madame Uppercut"
// members es un arreglo, Madame Uppercut es el segundo elemento (índice 1), y name es la propiedad
console.log(superHeroes.members[1].name); // "Madame Uppercut"

// 3️⃣ Valor "Superhuman reflexes"
// powers es un arreglo dentro del segundo miembro
console.log(superHeroes.members[1].powers[2]); // "Superhuman reflexes"

// 4️⃣ Valor "39" de la propiedad age de Madame Uppercut
console.log(superHeroes.members[1].age); // 39