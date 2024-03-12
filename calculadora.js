const display = document.querySelector(".pantalla");
const buttons = document.querySelectorAll(".btn");
const dot = document.querySelector(".punto");

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operations = ["+", "-", "*", "%", "÷"];

let operador1 = "0";
let operacion = "";
let operador2 = "";

display.value = operador1;

for (let button of buttons) {
  button.addEventListener("click", () => {
    //obtengo el contenido de cada boton => 1=1 +=+
    const buttonLabel = button.innerText;

    if (digits.includes(buttonLabel)) {
      if (operacion == "") {
        if (operador1 === "0") {
          //para no agrupar los valores se remplaza el 0 "operador1" por el nuevo valor
          operador1 = buttonLabel;
        } else {
          //si el numero no es cero se concatena el otro numero
          operador1 = operador1 + buttonLabel;
        }
        display.value = operador1;
        //cuando la operacion no esta vacia entra por aqui
      } else {
        if (operador2 === "0") {
          operador2 = buttonLabel;
        } else {
          operador2 = operador2 + buttonLabel;
        }
        display.value = operador2;
      }

      //reseteo todo
    } else if (buttonLabel == "AC") {
      operador1 = "0";
      operador2 = "";
      operacion = "";
      display.value = operador1;
    } else if (operations.includes(buttonLabel)) {
      if (operador1 != "0") {
        operacion = buttonLabel;
      }
    } else if (buttonLabel == "=") {
      const number1 = parseFloat(operador1);
      const number2 = parseFloat(operador2);
      let result = 0;

      if (operacion == "+") {
        result = number1 + number2;
      } else if (operacion == "-") {
        result = number1 - number2;
      } else if (operacion == "*") {
        result = number1 * number2;
      } else if (operacion == "÷") {
        result = number1 / number2;
      } else if (operacion == "%") {
        result = number1 / 100;
      }

      //para continuar operando el resultado va a tomat el lugar del operador1
      operador1 = `${result}`; //la plantilla string convierte el numero en string
      operador2 = "";
      operacion = "";
      display.value = operador1;
    } else if (buttonLabel == ",") {
      if (operacion == "") {
        if (!operador1.includes(".")) {
          operador1 += ".";
          display.value = operador1;
        }
      } else {
        // agrego numeros con coma
        if (!operador2.includes(".")) {
          operador2 += ".";
          display.value = operador2;
        }
      }
    }
    console.log(operador1, operacion, operador2);
  });
}
