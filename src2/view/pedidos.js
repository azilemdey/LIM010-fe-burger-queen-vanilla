import { getData, pintarArray, eliminarElem } from "../firebase-controller/funciones.js";
// import { docById } from "../firebase-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')

  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
<<<<<<< HEAD
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div></div><div>
  <table id = "encabezado" class = "hide">
  <tr>
  <td><strong>PRODUCTO</strong></td>
  <td><strong>PRECIO</strong></td>
  <td><strong>CANTIDAD</strong></td>
  </tr>
  </table>  
  <table id = "pedidos" class = "hide">
  <tr id="pedidos">
  </tr>  
  </table></div>`; 
=======
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div>
  </div><div id= "area-pedidos" class="hide"></div>`;
>>>>>>> 12e500e090ac25cc3f0b66ef7493e73e1ce679d8
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
    
    //  const pedidos = divElemt.querySelector('#pedidos');
     const areaPedidos = divElemt.querySelector('#area-pedidos');      
     areaPedidos.classList.remove('hide');
     pintarArray(arrPedidos, areaPedidos);

<<<<<<< HEAD
     const pedidos = divElemt.querySelector('#pedidos'); 
     const encabezado = divElemt.querySelector('#encabezado');
     pedidos.classList.remove("hide");     
     encabezado.classList.remove("hide"); 
     pintarArray(arrPedidos,pedidos);

     const eliminar = divElemt.querySelector('#eliminar');
     eliminar.addEventListener('click',(event)=>;
     })

=======
     const tablaPedidos = divElemt.querySelector('#tabla-pedidos');  
     tablaPedidos.addEventListener('click', (event) => {
      const obtenerId = event.target.id;
      eliminarElem(arrPedidos, obtenerId)
      console.log(arrPedidos);

      pintarArray(arrPedidos, areaPedidos);
     
     });
    
>>>>>>> 12e500e090ac25cc3f0b66ef7493e73e1ce679d8
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

