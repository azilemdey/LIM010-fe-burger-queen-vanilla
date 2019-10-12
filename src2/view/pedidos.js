import { getData } from "../firebase-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    
  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <div><button id= "desayunos">DESAYUNO</button><button id= "btn-menus">ALMUERZO Y CENA</button><div id= "carta"></div>`;
  divElemt.innerHTML = viewAccessories;

  const carta = divElemt.querySelector('#carta');

  const pintarColeccion = (doc) => {
    let btnName = document.createElement('button');

    btnName.setAttribute('id', doc.id);
    btnName.textContent = `${doc.data().name}:  $${doc.data().precio}`;
     
    carta.appendChild(btnName);
    btnName.addEventListener('click',(event)=>{
   
      console.log(event.target.id);
    });

  }
  const desayunos = divElemt.querySelector('#desayunos');

  desayunos.addEventListener('click',() => {
    carta.innerHTML="";
    getData('Desayunos')
    .then((snapshot)=> {
      snapshot.docs.forEach(doc => {
      pintarColeccion(doc);
      });
  });
});
  const btnMenus = divElemt.querySelector('#btn-menus');

  btnMenus.addEventListener('click',()=>{
    carta.innerHTML="";
    getData('Menus')
    .then((snapshot)=> {
      snapshot.docs.forEach(doc => {
      pintarColeccion(doc);
      });
  });
  });

  /* carta.addEventListener('click',(event)=>{
   
    console.log(event.target.id);
  }); */

  return divElemt;
};
