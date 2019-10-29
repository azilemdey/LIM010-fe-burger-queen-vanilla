import { getData} from "../functions-controller/firebase-controller.js";
import { pintarArray, listas} from "../functions-controller/views-controller.js";
import{aumentarCantidad} from "../functions-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')

  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div>
  </div><ul class = "hide" id = "adicional"><li id= "lista"></li></ul><input class= "hide" type = "text"><div id= "area-pedidos" class="hide"><div id="precio-total"></div></div>`;
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
      console.log(copiaObj);
      
      if (copiaObj.name === "Hamburguesa simple" || copiaObj.name === "Hamburguesa doble") {
        // alert('jnhn');
        const sabores = doc.data().sabores;
        

      // console.log(doc.data().sabores);

      // const lista = document.createElement("li");
      // adicional.appendChild(lista);
      // sabores.forEach(sabor => {
      //   const adicional = divElemt.querySelector('#adicional');   
      //   const lista = divElemt.querySelector('#lista');  
      //   adicional.classList.remove('hide');
      //   lista.classList.remove('hide');

       

        // const adicional = divElemt.querySelector('#adicional');   
        // const lista = divElemt.querySelector('#lista');  
        // adicional.classList.remove('hide');
        // lista.classList.remove('hide');
        // lista.textContent = listaS;
        
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

