import { getData } from "../firebase-controller/funciones.js";
// import { docById } from "../firebase-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    
  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div></div>`;
  divElemt.innerHTML = viewAccessories;
  
  const arrPedidos = [];
  const carta = divElemt.querySelector('#carta');
  
  const pintarColeccion = (doc) => {
    let btnName = document.createElement('button');
    btnName.setAttribute('id', doc.id);
    btnName.textContent = `${doc.data().name}:  $${doc.data().precio}`;
    carta.appendChild(btnName);

    btnName.addEventListener('click',() => {
<<<<<<< HEAD
      const obj = {
        productId: doc.id,
        precio: doc.data().precio,
        nombre: doc.data().name,
        cantidad: 1
      }

      arrPedidos.push(obj);
      console.log(arrPedidos);
      productoSeleccionado.productId= doc.id;
      
      if (arrPedidos.length === 0 ) {
        productoSeleccionado.cantidad = 1;
      }else {
       const arr = arrPedidos.find(producto => producto.id === doc.id);
          
      }  
=======
      const productoSeleccionado = doc.data();
      productoSeleccionado.id = doc.id;
      productoSeleccionado.cantidad = 1;
      
      arrPedidos.push(productoSeleccionado);
      
      if (productoSeleccionado.cantidad !== 1) {
        alert('jdb');
        const arr = arrPedidos.find(producto => producto.id === doc.id);      
        arr.cantidad += 1;
        console.log(arr);
        // console.log(productoSeleccionado);
        // console.log(doc.id);
      } 
      // } else {
      //  const arr = arrPedidos.find(producto => producto.id === doc.id);      
      //  arr.cantidad += 1;
      //  console.log(arr);
      // }
>>>>>>> b1b6a598da24f38bb9bb30140f17f8a32996124f
      });
     
     
      
      
      // else if (doc.id === doc.data().id) {
        
      // }
     

  }
  const desayunos = divElemt.querySelector('#desayunos');

  desayunos.addEventListener('click',() => {
    carta.innerHTML="";
    getData('Desayunos').then((snapshot)=> {
      snapshot.docs.forEach(doc => {
      pintarColeccion(doc);
      });
  });
});
  const btnMenus = divElemt.querySelector('#btn-menus');

  btnMenus.addEventListener('click',()=>{
    carta.innerHTML="";
    getData('Menus').then((snapshot)=> {
      snapshot.docs.forEach(doc => {
      pintarColeccion(doc);
      });
  });
  });
  return divElemt;
};

