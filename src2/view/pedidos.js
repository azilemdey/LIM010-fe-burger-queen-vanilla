import { getData, pintarArray, deleteProduct } from "../firebase-controller/funciones.js";
// import { docById } from "../firebase-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')

  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div>
  </div><div id= "area-pedidos" class="hide"></div>`;
  divElemt.innerHTML = viewAccessories;

  const arrPedidos = [];
  const carta = divElemt.querySelector('#carta');

  const pintarColeccion = (doc) => {
    let btnName = document.createElement('button');
    btnName.setAttribute('id', doc.id);
    btnName.textContent = `${doc.data().name}:  $${doc.data().precio}`;
    carta.appendChild(btnName);

    btnName.addEventListener('click', () => {
    const objetito=
    
      const productoSeleccionado = doc.data();
      productoSeleccionado.id = doc.id;
      productoSeleccionado.cantidad = 1;

      const elemExiste = arrPedidos.find(producto => producto.id === doc.id);
      if (elemExiste) {
        elemExiste.cantidad += 1;
      } else {
        arrPedidos.push(productoSeleccionado);
      };
      console.log(arrPedidos);
      
    //  const pedidos = divElemt.querySelector('#pedidos');
     let areaPedidos = divElemt.querySelector('#area-pedidos');      
     areaPedidos.classList.remove('hide');
     pintarArray(arrPedidos, areaPedidos);

      let areaPedidos = divElemt.querySelector('#area-pedidos');
      const pedidosPrint=()=>{
      areaPedidos.classList.remove('hide');
      pintarArray(arrPedidos, areaPedidos)};
      pedidosPrint();

      const deleteAll=()=>{
      const btnsDelete = areaPedidos.querySelectorAll(`[name='eliminar']`)
      deleteProduct(btnsDelete,arrPedidos, areaPedidos);
      console.log(arrPedidos);}
      delete deleteAll();
      // //  const btnsDelete = areaPedidos.querySelectorAll(`[name='eliminar']`);
      // //  btnsDelete.forEach((btnDelete) => {
      // //   btnDelete.addEventListener('click', (event) => {
      // //     const obtenerId = event.target.id;
      // //     eliminarElem(arrPedidos, obtenerId)
      //   

      //  });
      //  })
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

