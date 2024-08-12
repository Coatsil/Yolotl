function calcular(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var suma = num1 + num2;
    var cuadrado = suma * suma;
    var raiz = Math.sqrt(suma);

    document.getElementById('resultado').innerHTML = 
    `La suma es: ${suma} <br>
    El cuadrado de la suma es: ${cuadrado} <br>
    La raíz cuadrada de la suma es: ${raiz}`;
    
}