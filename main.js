// VARIABLES
let Mensaje = '';
let completo = false;
let regular = false;
let euleriano = false;
let listaAristas = [];
let listaVertices = [];
let v1 = [];
let v2 = [];
let v3 = [];
let v4 = [];

const listaConsColumI = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

/* ***** ESTA FUNCION ESTA OK ***** */
// CONDICIONA LAS LISTAS VISUALES
function mostrarDireccion() {
  const elementos = ['dV1', 'dV2', 'dV3', 'dV4', 'ndV1', 'ndV2', 'ndV3', 'ndV4'];

  if (document.getElementById('typeGraf').value == 1) {
    for (let i = 0; i <= 7; i++) {
      if (i <= 3) {
        document.getElementById(elementos[i]).hidden = false;
      } else {
        document.getElementById(elementos[i]).hidden = true;
      }
    }
  } else {
    for (let i = 0; i <= 7; i++) {
      if (i <= 3) {
        document.getElementById(elementos[i]).hidden = true;
      } else {
        document.getElementById(elementos[i]).hidden = false;
      }
    }
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// GRAFO COMPLETO NO DIRIGIDO
function grafoCompletoND(id, id2) {
  if (id.checked || id2.checked) {
    // TIENE EL ID || ARISTAS
    if (listaAristas.includes(id.id) == false && listaAristas.includes(id2.id) == false) {
      listaAristas.push(id.id);
    }
    // TIENE EL VERTICE
    if (listaVertices.includes(id.id.substring(0, 2)) == false) {
      listaVertices.push(id.id.substring(0, 2));
    }
    if (listaVertices.includes(id.id.substring(2)) == false) {
      listaVertices.push(id.id.substring(2));
    }
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// MATRIZ DE ADYACENCIA NO DIRIGIDA
function matrizANodirigida(checkbox, checkbox2, elementMA, elementMA2) {
  if (checkbox.checked || checkbox2.checked) {
    checkbox.checked = true;
    checkbox2.checked = true;

    elementMA.textContent = 1;
    elementMA2.textContent = 1;
  } else {
    elementMA.textContent = 0;
    elementMA2.textContent = 0;
  }
  grafoCompletoND(checkbox, checkbox2);
}

/* ***** ESTA FUNCION ESTA OK ***** */
// GRAFO COMPLETO DIRIGIDO DIRIGIDO
function grafoCompletoD(id) {
  const vertice = id.id.substring(0, 2);
  const vertice2 = id.id.substring(2);
  if (id.checked) {
    if (listaAristas.includes(id.id) == false) {
      listaAristas.push(id.id);
    }
    if (listaVertices.includes(vertice) == false) {
      listaVertices.push(vertice);
    }
    if (listaVertices.includes(vertice2) == false) {
      listaVertices.push(vertice2);
    }
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// MATRIZ DE ADYACENCIA DIRIGIDA
function matrizADirigida(checkbox, elementMatriz) {
  if (checkbox.checked) {
    elementMatriz.textContent = 1;
  } else {
    elementMatriz.textContent = 0;
  }
  grafoCompletoD(checkbox);
}

/* ***** ESTA FUNCION ESTA OK ***** */
// GRAFO REGULAR
function grafoRegular(id) {
  const idInversa = id.id.substring(2) + id.id.substring(0, 2);
  if (id.checked) {
    switch (id.id.substring(0, 2)) {
      case 'V1':
        if (v1.includes(id.id) == false) {
          v1.push(id.id);
        }
        if (v1.includes(idInversa) == false) {
          v1.push(idInversa);
        }
        break;

      case 'V2':
        if (v2.includes(id.id) == false) {
          v2.push(id.id);
        }
        if (v2.includes(idInversa) == false) {
          v2.push(idInversa);
        }
        break;

      case 'V3':
        if (v3.includes(id.id) == false) {
          v3.push(id.id);
        }
        if (v3.includes(idInversa) == false) {
          v3.push(idInversa);
        }
        break;

      case 'V4':
        if (v4.includes(id.id) == false) {
          v4.push(id.id);
        }
        if (v4.includes(idInversa) == false) {
          v4.push(idInversa);
        }
        break;

      default:
        break;
    }
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// MATRIZ DE INCIDENCIA DIRIGIDA
function matrizIDirigida(checkbox, checkbox2) {
  function modificar(p1, p2) {
    p1.textContent = 1;
    p2.textContent = -1;
  }

  if (checkbox.checked || checkbox2.checked) {
    idCortado = checkbox.id.substring(0, 2);
    idCortado2 = checkbox.id.substring(2);

    for (let i = 0; i < 10; i++) {
      if ((checkbox.id == 'V1V2' || checkbox.id == 'V2V1') && listaConsColumI[i] == 'A') {
        modificar(document.getElementById('Mi' + idCortado + listaConsColumI[i]), document.getElementById('Mi' + idCortado2 + listaConsColumI[i]));
      }
      if ((checkbox.id == 'V2V3' || checkbox.id == 'V3V2') && listaConsColumI[i] == 'B') {
        modificar(document.getElementById('Mi' + idCortado + listaConsColumI[i]), document.getElementById('Mi' + idCortado2 + listaConsColumI[i]));
      }
      if ((checkbox.id == 'V3V4' || checkbox.id == 'V4V3') && listaConsColumI[i] == 'C') {
        modificar(document.getElementById('Mi' + idCortado + listaConsColumI[i]), document.getElementById('Mi' + idCortado2 + listaConsColumI[i]));
      }
      if ((checkbox.id == 'V1V4' || checkbox.id == 'V4V1') && listaConsColumI[i] == 'D') {
        modificar(document.getElementById('Mi' + idCortado + listaConsColumI[i]), document.getElementById('Mi' + idCortado2 + listaConsColumI[i]));
      }
      if ((checkbox.id == 'V1V3' || checkbox.id == 'V3V1') && listaConsColumI[i] == 'E') {
        modificar(document.getElementById('Mi' + idCortado + listaConsColumI[i]), document.getElementById('Mi' + idCortado2 + listaConsColumI[i]));
      }
      if ((checkbox.id == 'V2V4' || checkbox.id == 'V4V2') && listaConsColumI[i] == 'F') {
        modificar(document.getElementById('Mi' + idCortado + listaConsColumI[i]), document.getElementById('Mi' + idCortado2 + listaConsColumI[i]));
      }
      if (checkbox.id == 'V1V1' && listaConsColumI[i] == 'G') {
        document.getElementById('Mi' + idCortado + listaConsColumI[i]).textContent = 2;
      }
      if (checkbox.id == 'V2V2' && listaConsColumI[i] == 'H') {
        document.getElementById('Mi' + idCortado + listaConsColumI[i]).textContent = 2;
      }
      if (checkbox.id == 'V3V3' && listaConsColumI[i] == 'I') {
        document.getElementById('Mi' + idCortado + listaConsColumI[i]).textContent = 2;
      }
      if (checkbox.id == 'V4V4' && listaConsColumI[i] == 'J') {
        document.getElementById('Mi' + idCortado + listaConsColumI[i]).textContent = 2;
      }
    }
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// MATRIZ DE INCIDENCIA NO DIRIGIDA
function matrizINodirigida(checkbox, checkbox2) {
  let idCheckbox = checkbox.id.substring(0, 2);
  let idCheckbox2 = checkbox.id.substring(2);

  function modificar(p1, p2) {
    p1.textContent = 1;
    p2.textContent = 1;
  }

  if (checkbox.checked && checkbox2.checked) {
    for (let i = 0; i < 10; i++) {
      if ((checkbox.id == 'V1V2' || checkbox.id == 'V2V1') && listaConsColumI[i] == 'A') {
        modificar(document.getElementById('Mi' + idCheckbox + listaConsColumI[i]), document.getElementById('Mi' + idCheckbox2 + listaConsColumI[i]));
      }

      if ((checkbox.id == 'V2V3' || checkbox.id == 'V3V2') && listaConsColumI[i] == 'B') {
        modificar(document.getElementById('Mi' + idCheckbox + listaConsColumI[i]), document.getElementById('Mi' + idCheckbox2 + listaConsColumI[i]));
      }

      if ((checkbox.id == 'V3V4' || checkbox.id == 'V4V3') && listaConsColumI[i] == 'C') {
        modificar(document.getElementById('Mi' + idCheckbox + listaConsColumI[i]), document.getElementById('Mi' + idCheckbox2 + listaConsColumI[i]));
      }

      if ((checkbox.id == 'V1V4' || checkbox.id == 'V4V1') && listaConsColumI[i] == 'D') {
        modificar(document.getElementById('Mi' + idCheckbox + listaConsColumI[i]), document.getElementById('Mi' + idCheckbox2 + listaConsColumI[i]));
      }

      if ((checkbox.id == 'V1V3' || checkbox.id == 'V3V1') && listaConsColumI[i] == 'E') {
        modificar(document.getElementById('Mi' + idCheckbox + listaConsColumI[i]), document.getElementById('Mi' + idCheckbox2 + listaConsColumI[i]));
      }

      if ((checkbox.id == 'V2V4' || checkbox.id == 'V4V2') && listaConsColumI[i] == 'F') {
        modificar(document.getElementById('Mi' + idCheckbox + listaConsColumI[i]), document.getElementById('Mi' + idCheckbox2 + listaConsColumI[i]));
      }

      if (checkbox.id == 'V1V1' && listaConsColumI[i] == 'G') {
        document.getElementById('Mi' + idCheckbox + listaConsColumI[i]).textContent = 2;
      }

      if (checkbox.id == 'V2V2' && listaConsColumI[i] == 'H') {
        document.getElementById('Mi' + idCheckbox + listaConsColumI[i]).textContent = 2;
      }

      if (checkbox.id == 'V3V3' && listaConsColumI[i] == 'I') {
        document.getElementById('Mi' + idCheckbox + listaConsColumI[i]).textContent = 2;
      }

      if (checkbox.id == 'V4V4' && listaConsColumI[i] == 'J') {
        document.getElementById('Mi' + idCheckbox + listaConsColumI[i]).textContent = 2;
      }
    }
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// ESTA FUNCION ESTA ASOCIADA A GRAFOCOMPETO
function intencion(numero) {
  let v1;
  let v2;
  let div;

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

  if (div == listaAristas.length && div != 0) {
    completo = true;
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// FUNCION REGULAR
function esRegular() {
  let mayor = 0.1;
  let menor = 0.001;
  let listaElement = [];

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

  if (mayor == menor && mayor != null && menor != null) {
    Mensaje += ', Regular';
  }
}

/* ***** ESTA FUNCION ESTA OK ***** */
// BOTON EJECUTAR
function ejecutar() {
  const relation = 'relationGraf';
  const lista1 = ['V1', 'V2', 'V3', 'V4'];
  let listaColumnasI = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const typeGraf = document.getElementById('typeGraf').value;

  // MATRIZ ADYACENCIA
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let identificador = lista1[i] + lista1[j];
      let identificador2 = lista1[j] + lista1[i];
      let MAVI = "Ma" + identificador;
      let MAVI2 = "Ma" + identificador2;
      let tongleList = document.getElementById(relation + (i + 1)).value;

      // MATRIZ ADYACENCIA NO DIRIGIDO
      if (tongleList == 1) {
        matrizANodirigida(
          document.getElementById(identificador),
          document.getElementById(identificador2),
          document.getElementById(MAVI),
          document.getElementById(MAVI2),
        );
      }

      // MATRIZ ADYACENCIA DIRIGIDO
      if (tongleList == 2) {
        matrizADirigida(
          document.getElementById(identificador),
          document.getElementById(MAVI));
      }

      // GRAFO REGULAR
      grafoRegular(document.getElementById(identificador));
    }
  }

  // MATRIZ INCIDENCIA
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        let identificador = lista1[j] + lista1[k];
        let identificador2 = lista1[k] + lista1[j];

        if (document.getElementById(relation + (j + 1)).value == 1) {
          // MATRIZ DE INCIDENCIA NO DIRIGIDO
          matrizINodirigida(
            document.getElementById(identificador),
            document.getElementById(identificador2),
            listaColumnasI[0],
          );
        }
      }
    }
    listaColumnasI.shift();
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let identificador = lista1[i] + lista1[j];
      let identificador2 = lista1[j] + lista1[i];
      let TongleList = document.getElementById(relation + (i + 1)).value;

      // MATRIZ INCIDENCIA NO DIRIGIDO
      if (TongleList == 1) {
        matrizINodirigida(
          document.getElementById(identificador),
          document.getElementById(identificador2)
        );
      }

      // MATRIZ INCIDENCIA DIRIGIDO
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
  } else {
    intencion(2);
  }

  if (completo != false) {
    Mensaje += 'Completo';
  }

  esRegular();
  document.getElementById('Mensaje').textContent = Mensaje;
}

window.addEventListener('load', mostrarDireccion());
document.getElementById('typeGraf').addEventListener('click', mostrarDireccion);
document.getElementById('Enviar').addEventListener('click', ejecutar);