import { getData, pintarArray } from "../firebase-controller/funciones.js";
// import { docById } from "../firebase-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')

  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div></div><div>
  <table>
  <tr>
  <td><strong>PRODUCTO</strong></td>
  <td><strong>PRECIO</strong></td>
  <td><strong>CANTIDAD</strong></td>
  </tr>
  </table>  
  <table id = "pedidos" class="hide">
  <tr id="pedidos">
  </tr>  
  </table></div>`;
  divElemt.innerHTML = viewAccessories;

  const arrPedidos = [];
  const carta = divElemt.querySelector('#carta');

  const pintarColeccion = (doc) => {
    let btnName = document.createElement('button');
    btnName.setAttribute('id', doc.id);
    btnName.textContent = `${doc.data().name}:  $${doc.data().precio}`;
    carta.appendChild(btnName);

    btnName.addEventListener('click', () => {
      const productoSeleccionado = doc.data();
      productoSeleccionado.id = doc.id;
      productoSeleccionado.cantidad = 1;
      console.log(arrPedidos);

      const elemExiste = arrPedidos.find(producto => producto.id === doc.id);
      if (elemExiste) {
        elemExiste.cantidad += 1;
      } else {
        arrPedidos.push(productoSeleccionado);
      };

     const pedidos = divElemt.querySelector('#pedidos'); 
     pedidos.classList.remove("hide");     
     pintarArray(arrPedidos,pedidos);

    });
  };

  const desayunos = divElemt.querySelector('#desayunos');

  desayunos.addEventListener('click', () => {
    carta.innerHTML = "";
    getData('Desayunos').then((snapshot) => {
      snapshot.docs.forEach(doc => {
        pintarColeccion(doc);
      });
    });
  });
  const btnMenus = divElemt.querySelector('#btn-menus');

  btnMenus.addEventListener('click', () => {
    carta.innerHTML = "";
    getData('Menus').then((snapshot) => {
      snapshot.docs.forEach(doc => {
        pintarColeccion(doc);
      });
    });
  });
  return divElemt;
};

