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
<<<<<<< HEAD
    btnName.addEventListener('click',(event)=>{
   
      console.log(event.target.id);
    });

    btnName.addEventListener('click',()=>{
=======
    btnName.addEventListener('click',() => {
      const productoSeleccionado = doc.data();
>>>>>>> be9629552134615840555e69dcc02f547b660a8f
      arrPedidos.push(doc.data());
      if (arrPedidos.length === 0 ) {
        productoSeleccionado.cantidad = 1;
        console.log(productoSeleccionado);
        console.log(doc.id);
      }else {
       const arr = arrPedidos.find(producto => producto.id === doc.id);
       console.log(arr);
       
      }  
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

