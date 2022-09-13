/* AUN FALTA DEFINIR
****. El grafo es completo: No dirigido: n(n-1)/2, Dirigido: n(n-1)
2. EL grafo es regular: Si todos los grados (Cantidad de aristas que toca) son iguales es regular. En un grafo dirigido el grado es el entrante más el saliente.

3. El grafo es Euleriano: Que puede pasar por todos sin repetir*/

//FUNCION PRINCIPAL
window.addEventListener('load', mostrarDireccion());
document.getElementById('typeGraf').addEventListener('click', mostrarDireccion);
document.getElementById('Enviar').addEventListener('click', ejecutar);
let Mensaje = "";
let completo = false;
let regular = false;
let euleriano = false;

//REVISAR SI ESTAS LISTAS REPITEN VALORES, SI NO CREAR UNA LISTA UNICA
let lista = []; //CREO QUE ESTO SE PUEDE CAMBIAR POR UN CONTADOR
let listaVertices = [];
let v1 = [];
let v2 = [];
let v3 = [];
let v4 = [];

// CONDICIONA LAS LISTAS VISUALES
function mostrarDireccion() {
  let elementos = ['dV1', 'dV2', 'dV3', 'dV4', 'ndV1', 'ndV2', 'ndV3', 'ndV4'];

  if (document.getElementById('typeGraf').value == 1) {
    for (i = 0; i <= 3; i++) {
      document.getElementById(elementos[i]).hidden = false;
    }
    for (i = 4; i <= 7; i++) {
      document.getElementById(elementos[i]).hidden = true;
    }

  } else {
    for (i = 0; i <= 3; i++) {
      document.getElementById(elementos[i]).hidden = true;
    }
    for (i = 4; i <= 7; i++) {
      document.getElementById(elementos[i]).hidden = false;
    }
  }
}

//GRAFO COMPLETO NO DIRIGIDO
function grafoCompletoND(id, id2) {
  if (id.checked || id2.checked) {
    //TIENE EL ID
    if (lista.includes(id.id) == false && lista.includes(id2.id) == false) {
      lista.push(id.id);
    }
    //TIENE EL VERTICE
    if (listaVertices.includes(id.id.substring(0, 2)) == false) {
      listaVertices.push(id.id.substring(0, 2));
    }
    if (listaVertices.includes(id.id.substring(2)) == false) {
      listaVertices.push(id.id.substring(2));
    }
  }
}

// MATRIZ DE ADYACENCIA NO DIRIGIDA
function matrizANodirigida(checkbox, checkbox2, element2, element3) {
  if (checkbox.checked || checkbox2.checked) {
    checkbox.checked = true;
    checkbox2.checked = true;

    element2.textContent = 1;
    element3.textContent = 1;

  } else {
    element2.textContent = 0;
    element3.textContent = 0;
  }
  grafoCompletoND(checkbox, checkbox2);
}

//GRAFO COMPLETO DIRIGIDO DIRIGIDO
function grafoCompletoD(id) {
  if (id.checked) {
    if (lista.includes(id.id) == false) {
      lista.push(id.id);
    }
    if (listaVertices.includes(id.id.substring(0, 2)) == false) {
      listaVertices.push(id.id.substring(0, 2));
    }
    if (listaVertices.includes(id.id.substring(2)) == false) {
      listaVertices.push(id.id.substring(2));
    }
  }
}

// MATRIZ DE ADYACENCIA DIRIGIDA
function matrizADirigida(checkbox, elementMatriz) {
  if (checkbox.checked) {
    elementMatriz.textContent = 1;
  } else {
    elementMatriz.textContent = 0;
  }
  grafoCompletoD(checkbox);
}

function grafoRegularND(id) {
  let id2 = id.id.substring(2)+id.id.substring(0,2);
  if (id.checked) {
    switch (id.id.substring(0, 2) || id.id.substring(2)) {
      case "V1":
        if (v1.includes(id.id) == false) {
          v1.push(id.id);
        }
        break;

      case "V2":
        if (v2.includes(id.id) == false) {
          v2.push(id.id);
        }
        break;

      case "V3":
        if (v3.includes(id.id) == false) {
          v3.push(id.id);
        }
        break;

      case "V4":
        if (v4.includes(id.id) == false) {
          v4.push(id.id);
        }
        break;

      default:
        break;
    }

    /* switch (id.id.substring(0, 2)) {
      case "V1":
        if (v1.includes(id.id) == false) {
          v1.push(id.id);
        }
        break;

      case "V2":
        if (v2.includes(id.id) == false) {
          v2.push(id.id);
        }
        break;

      case "V3":
        if (v3.includes(id.id) == false) {
          v3.push(id.id);
        }
        break;

      case "V4":
        if (v4.includes(id.id) == false) {
          v4.push(id.id);
        }
        break;

      default:
        break;
    } */
  }

  /* if (id.checked) {
    switch (id.id.substring(2)) {
      case "V1":
        if (v1.includes(id.id.substring(2) + id.id.substring(0, 2)) == false) {
          v1.push(id.id.substring(2) + id.id.substring(0, 2));
          console.log("Lo incluye");
        }
        break;

      case "V2":
        if (v2.includes(id.id.substring(2) + id.id.substring(0, 2)) == false) {
          v2.push(id.id.substring(2) + id.id.substring(0, 2));
        }
        break;

      case "V3":
        if (v3.includes(id.id.substring(2) + id.id.substring(0, 2)) == false) {
          v3.push(id.id.substring(2) + id.id.substring(0, 2));
        }
        break;

      case "V4":
        if (v4.includes(id.id.substring(2) + id.id.substring(0, 2)) == false) {
          v4.push(id.id.substring(2) + id.id.substring(0, 2));
        }
        break;

      default:
        break;
    }
  } */
}

//BOTON EJECUTAR
function ejecutar() {
  const relation = 'relationGraf';
  const lista1 = ['V1', 'V2', 'V3', 'V4'];
  const lista2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const typeGraf = document.getElementById("typeGraf").value;

  // MATRIZ ADYACENCIA
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const identificador = lista1[i] + lista1[j];
      const identificador2 = lista1[j] + lista1[i];
      const MAVI = "Ma" + identificador;
      const MAVI2 = "Ma" + identificador2;

      let tongleList = document.getElementById(relation + (i + 1)).value;

      //MATRIZ ADYACENCIA NO DIRIGIDO
      if (tongleList == 1) {
        matrizANodirigida(
          document.getElementById(identificador),
          document.getElementById(identificador2),
          document.getElementById(MAVI),
          document.getElementById(MAVI2)
        );
      }

      //MATRIZ ADYACENCIA DIRIGIDO
      if (tongleList == 2) {
        matrizADirigida(
          document.getElementById(identificador),
          document.getElementById(MAVI));
      }

      //GRAFO REGULAR
      grafoRegularND(document.getElementById(identificador));
    }
  }

  // MATRIZ INCIDENCIA
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 4; j++) {
      for (const c of lista1) {

        const identificador = lista1[j] + c;
        const identificador2 = c + lista1[j];

        if (document.getElementById(relation + (j + 1)).value == 1) {
          //MATRIZ DE INCIDENCIA NO DIRIGIDO
          matrizINodirigida(
            document.getElementById(identificador), 
            document.getElementById(identificador2), 
            lista2[0]);
        }
      }
    }
    lista2.shift();
  }

  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
      let identificador = lista1[i] + lista1[k];
      let identificador2 = lista1[k] + lista1[i];
      let TongleList = document.getElementById(relation + (i + 1)).value;

      //MATRIZ INCIDENCIA NO DIRIGIDO
      if (TongleList == 1) {
        matrizINodirigida(
          document.getElementById(identificador), 
          document.getElementById(identificador2)
          );
      }

      //MATRIZ INCIDENCIA DIRIGIDO
      if (TongleList == 2) {
        matrizIDirigida(
          document.getElementById(identificador), 
          document.getElementById(identificador2)
          );
      }
    }
  }

  if (typeGraf == 0) {
    intencion(1);
  }
  if (typeGraf == 1) {
    intencion(2);
  }

  if (completo) {
    Mensaje += "Completo"; 
  }

  esRegular();
  document.getElementById("Mensaje").textContent = "completo";
}


//ESTA FUNCION ESTA ASOCIADA A GRAFOCOMPETO
function intencion(numero) {
  let v1, v2, div;

  if (numero == 1) {
    v1 = listaVertices.length;
    v2 = listaVertices.length - 1;
    div = (v1 * v2) / 2;
  }
  if (numero == 2) {
    v1 = listaVertices.length;
    v2 = listaVertices.length - 1;
    div = (v1 * v2);
  }

  if (div == lista.length && div != 0) {
    completo = true;
  }
}

var BreakException = {};

function esRegular() {
  let mayor = 0.1,
    menor = 0.001;
  listaElement = [];

  if (v1.length > 0) {
    listaElement.push(v1.length);
  }

  if (v2.length > 0) {
    listaElement.push(v2.length);
  }

  if (v3.length > 0) {
    listaElement.push(v3.length);
  }

  if (v4.length > 0) {
    listaElement.push(v4.length);
  }

  menor = Math.min.apply(null, listaElement);
  mayor = Math.max.apply(null, listaElement);

  console.log("V1: " + v1);
  console.log("V2: " + v2);
  console.log("V3: " + v3);
  console.log("V4: " + v4);

  console.log(mayor);
  console.log(menor);

  if (mayor == menor && mayor != null && menor != null) {
    console.log("El grafo es Regular")
  }

}

// MATRIZ DE INCIDENCIA NO DIRIGIDA
function matrizINodirigida(checkbox, checkbox2) {
  function modificar(p1, p2) {
    p1.textContent = 1;
    p2.textContent = 1;
  }

  function mandarCero(p1, p2) {
    p1.textContent = 0;
    p2.textContent = 0;
  }

  if (checkbox.checked && checkbox2.checked) {
    if (checkbox.id == 'V1V2' || checkbox.id == 'V2V1') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}A`), document.getElementById(`Mi${checkbox.id.substring(2)}A`));
    }

    if (checkbox.id == 'V2V3' || checkbox.id == 'V3V2') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}B`), document.getElementById(`Mi${checkbox.id.substring(2)}B`));
    }

    if (checkbox.id == 'V3V4' || checkbox.id == 'V4V3') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}C`), document.getElementById(`Mi${checkbox.id.substring(2)}C`));
    }

    if (checkbox.id == 'V1V4' || checkbox.id == 'V4V1') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}D`), document.getElementById(`Mi${checkbox.id.substring(2)}D`));
    }

    if (checkbox.id == 'V1V3' || checkbox.id == 'V3V1') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}E`), document.getElementById(`Mi${checkbox.id.substring(2)}E`));
    }

    if (checkbox.id == 'V2V4' || checkbox.id == 'V4V2') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}F`), document.getElementById(`Mi${checkbox.id.substring(2)}F`));
    }

    if (checkbox.id == 'V1V1') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}G`).textContent = 2;
    }

    if (checkbox.id == 'V2V2') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}H`).textContent = 2;
    }

    if (checkbox.id == 'V3V3') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}I`).textContent = 2;
    }

    if (checkbox.id == 'V4V4') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}J`).textContent = 2;
    }
  }
}

// MATRIZ DE INCIDENCIA DIRIGIDA
function matrizIDirigida(checkbox, checkbox2) {
  function modificar(p1, p2) {
    p1.textContent = 1;
    p2.textContent = -1;
  }

  if (checkbox.checked || checkbox2.checked) {
    if (checkbox.id == 'V1V2' || checkbox.id == 'V1V2') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}A`), document.getElementById(`Mi${checkbox.id.substring(2)}A`));
    }

    if (checkbox.id == 'V2V3' || checkbox.id == 'V3V2') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}B`), document.getElementById(`Mi${checkbox.id.substring(2)}B`));
    }

    if (checkbox.id == 'V3V4' || checkbox.id == 'V4V3') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}C`), document.getElementById(`Mi${checkbox.id.substring(2)}C`));
    }

    if (checkbox.id == 'V1V4' || checkbox.id == 'V4V1') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}D`), document.getElementById(`Mi${checkbox.id.substring(2)}D`));
    }

    if (checkbox.id == 'V1V3' || checkbox.id == 'V3V1') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}E`), document.getElementById(`Mi${checkbox.id.substring(2)}E`));
    }

    if (checkbox.id == 'V2V4' || checkbox.id == 'V4V2') {
      modificar(document.getElementById(`Mi${checkbox.id.substring(0, 2)}F`), document.getElementById(`Mi${checkbox.id.substring(2)}F`));
    }

    if (checkbox.id == 'V1V1') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}G`).textContent = 2;
    }

    if (checkbox.id == 'V2V2') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}H`).textContent = 2;
    }

    if (checkbox.id == 'V3V3') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}I`).textContent = 2;
    }

    if (checkbox.id == 'V4V4') {
      document.getElementById(`Mi${checkbox.id.substring(0, 2)}J`).textContent = 2;
    }
  }
} //422