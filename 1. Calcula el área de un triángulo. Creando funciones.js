/*Área Circulo*/
let radio = prompt(`Radio del Ciculo`);
const circleArea = (radio) => Math.PI * Math.pow(radio, 2);
console.log(`El area del circulo con radio de ${radio} es: ${circleArea(radio)}`);
alert(`El area del circulo es ${circleArea(radio)}`);


/*Área Cuadrado*/
let lado = prompt(`Lado del Cuadrado`);
const squareArea = (lado) => Math.pow(lado, 2);
console.log(`El area del cuadrado con lado de ${lado} es: ${squareArea(lado)}`);

/*Área Rectangulo*/
let base = prompt(`Base del Rectangulo`);
let lado = prompt(`Lado del Rectangulo`);
const rectangleArea = (lado,base) => lado * base;
console.log(`El area del Rectangulo con lado de ${lado} y base de ${base}
es: ${rectangleArea(lado,base)}`);

