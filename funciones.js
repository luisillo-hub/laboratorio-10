function mostrarValores() {
    let nombre = "luisdiaz";
    let edad = 23;
    let esEstudiante = true;
    document.write("Nombre: ",nombre,"<br>");
    document.write("Edad: ",edad,"<br>");
    document.write("¿Es estudiante?: ",esEstudiante,"<br><br>");
    nombre = "keny";
    edad = 15;
    esEstudiante = false;
    document.write("Nombre: ",nombre,"<br>");
    document.write("Edad: ",edad,"<br>");
    document.write("¿Es estudiante?: ",esEstudiante,"<br>");
} 
function operacionesMatematicas() {
    let a = 100;
    let b = 10;
    document.write("<strong>Resultados de la operación: </strong><br>");
    document.write("La suma es: ",a+b,"<br>");
    document.write("La resta es: ",a-b,"<br>");
    document.write("La multiplicación es: ",a*b,"<br>");
    document.write("La división es: ",a/b,"<br>");
    document.write("<br><strong>Comparaciones: </strong><br>")
    document.write("A es mayor que B: ",a>b,"<br>");
    document.write("A es menor que B: ",a<b,"<br>");
    document.write("A es mayor o igual que B: ",a>=b,"<br>");
    document.write("A es menor o igual que B: ",a<=b,"<br>");
    document.write("A es igual a B: ",a==b,"<br>");
    document.write("A es diferente de B: ",a!=b,"<br>");
}
function verificarConduccion() {
    let esMayordeEdad = true;
    let tieneLicencia = false;
    const puedeConducir = esMayordeEdad && tieneLicencia;
    const mensajeBienvenida = `¡Hola, bienvenido al sistema!`;
    document.write("<strong>¿Puede conducir? </strong>", puedeConducir,"<br><br>");
    document.write("<strong>Mensaje de Bienvenida: </strong>", mensajeBienvenida);
}