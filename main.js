var Peso=0
var Estatura=0
var IMC=0
var Estado=0 

function CalcularPeso(){
   Peso=prompt("Ingresa tu peso...")
    
}
function CalcularEstatura(){

    Estatura=prompt("Ingresa tu estatura...")
}

function CalcularIMC(){
    IMC=Peso/(Estatura*Estatura)
    alert(" "+IMC)
    if (IMC<18.5)
        {
            alert("Tienes problemas de nutrición")
        
        }
        else if (IMC>=18.5&&IMC<25)
        {
           alert("Tu IMC es Normal")
        }
        else if (IMC < 30)
        {
           alert("Tu IMC es Sobrepeso")
        }
        else if (IMC < 35) 
        {
            alert("Tu IMC es Obesidad I")
        }
        else if (IMC<40)
        {
            alert("Tu IMC es Obesidad II")
        }
        else if (IMC >= 40)
        {
            alert("Tu IMC es Obesidad III")
        } 
           }