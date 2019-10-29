import { getData} from "../functions-controller/firebase-controller.js";
import { pintarArray} from "../functions-controller/views-controller.js";
import{aumentarCantidad} from "../functions-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')

  const viewAccessories = `
   <h2 class="text-center">PEDIDOS</h2>
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div>
  </div><input class= "hide" type = "text"><div id= "area-pedidos" class="hide"><ul id="sabores"></ul><div id="precio-total"></div></div>`;
  divElemt.innerHTML = viewAccessories;
  const carta = divElemt.querySelector('#carta');

    const pintarColeccion = (doc) => {
    let btnName = document.createElement('button');
    btnName.setAttribute('id', doc.id);
    btnName.textContent = `${doc.data().name}:  $${doc.data().precio}`;
    carta.appendChild(btnName);

    btnName.addEventListener('click', () => {
      const productoSeleccionado = doc.data();
      const copiaObj = Object.assign({}, productoSeleccionado);
      copiaObj.id = doc.id;
      copiaObj.cantidad = 1;
      
      if (copiaObj.name === "Hamburguesa simple" || copiaObj.name === "Hamburguesa doble") {
        const sabores = doc.data().sabores;
        /*  const listaSabores = divElemt.querySelector('#sabores')
          sabores.forEach(sabor => {
          const lista = document.createElement("li");
          lista.textContent = sabor;
          listaSabores.innerHTLM = lista; */
         })
      // console.log(doc.data().sabores);
       }
     aumentarCantidad(copiaObj,doc.id);
     let areaPedidos = divElemt.querySelector('#area-pedidos');   
     areaPedidos.classList.remove('hide');
     pintarArray(areaPedidos);
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
