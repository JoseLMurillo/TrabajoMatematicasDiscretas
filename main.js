/* eslint-disable eqeqeq */
// CONDICIONA LAS LISTAS VISUALES
function mostrarDireccion() {
  if (document.getElementById('typeGraf').value == 1) {
    document.getElementById('dV1').hidden = false;
    document.getElementById('dV2').hidden = false;
    document.getElementById('dV3').hidden = false;
    document.getElementById('dV4').hidden = false;
    document.getElementById('ndV1').hidden = true;
    document.getElementById('ndV2').hidden = true;
    document.getElementById('ndV3').hidden = true;
    document.getElementById('ndV4').hidden = true;
  } else {
    document.getElementById('ndV1').hidden = false;
    document.getElementById('ndV2').hidden = false;
    document.getElementById('ndV3').hidden = false;
    document.getElementById('ndV4').hidden = false;

    document.getElementById('dV1').hidden = true;
    document.getElementById('dV2').hidden = true;
    document.getElementById('dV3').hidden = true;
    document.getElementById('dV4').hidden = true;
  }
}

function ejecutar() {
  const relation = 'relationGraf';
  const lista1 = ['V1', 'V2', 'V3', 'V4'];const lista2 = ['V1', 'V2', 'V3', 'V4'];const lista3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  // MATRIZ ADYACENCIA
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < 4; j++) {
      const identificador = lista1[i] + lista2[j];
      const identificador2 = lista2[j] + lista1[i];

      const MAVI = "Ma" + identificador;
      const MAVI2 = "Ma" + identificador2;

      // NO DIRIGIDO
      if (document.getElementById(relation + (i + 1)).value == 1) {
        matrizANodirigida(document.getElementById(identificador), document.getElementById(identificador2), document.getElementById(MAVI), document.getElementById(MAVI2));
      }

      // DIRIGIDO
      if (document.getElementById(relation + (i + 1)).value == 2) {
        matrizADirigida(document.getElementById(identificador), document.getElementById(MAVI));
      }
    }
  }

  // MATRIZ INCIDENCIA
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 4; j++) {
      for (const c of lista2) {

        const identificador = lista1[j] + c;
        const identificador2 = c + lista1[j];

        if (document.getElementById(relation + (j + 1)).value == 1) {
          matrizINodirigida(document.getElementById(identificador), document.getElementById(identificador2), lista3[0]);
        }
      }
    }
    lista3.shift();
  }

  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
      let identificador = lista1[i] + lista2[k];

      identificador2 = lista2[k] + lista1[i];

      // NO DIRIGIDO
      if (document.getElementById(relation + (i + 1)).value == 1) {
        // eslint-disable-next-line max-len
        matrizINodirigida(document.getElementById(identificador), document.getElementById(identificador2));
      }

      // DIRIGIDO
      if (document.getElementById(relation + (i + 1)).value == 2) {
        // eslint-disable-next-line max-len
        matrizIDirigida(document.getElementById(identificador), document.getElementById(identificador2));
      }
    }
  }
}

function main() {
  mostrarDireccion();
  const typeGraf = document.getElementById('typeGraf');

  typeGraf.addEventListener('click', mostrarDireccion);

  document.getElementById('Enviar').addEventListener('click', ejecutar);
}

// MATRIZ DE ADYACENCIA NO DIRIGIDA
function matrizANodirigida(checkbox, checkbox2, element2, element3) {
  // eslint-disable-next-line max-len
  if ((checkbox.checked && checkbox2.checked != true) || (checkbox2.checked && checkbox.checked != true) || (checkbox.checked && checkbox2.checked)) {
    checkbox.checked = true;
    checkbox2.checked = true;

    element2.textContent = 1;
    element3.textContent = 1;
  } else {
    element2.textContent = 0;
    element3.textContent = 0;
  }
}

// MATRIZ DE ADYACENCIA DIRIGIDA
function matrizADirigida(checkbox, elementMatriz) {
    if (checkbox.checked) {
        elementMatriz.textContent = 1;
    } else {
        elementMatriz.textContent = 0;
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
}

window.addEventListener('load', main);
