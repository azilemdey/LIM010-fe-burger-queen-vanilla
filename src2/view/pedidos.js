import { getData } from "../firebase-controller/funciones.js";

export default () => {
  const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    
  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <button id= "desayunos">DESAYUNO</button><div id="desaparece" class="hide"><button id="cafe">CAFE AMERICANO</button><button>CAFE CON LECHE</button><button>SANDWICH DE JAMON Y QUESO</button><button>JUGO NATURAL</button></div>`;
  divElemt.innerHTML = viewAccessories;

  const desayunos = divElemt.querySelector('#desayunos');

  desayunos.addEventListener('click',()=>{
    const desaparece= divElemt.querySelector('#desaparece');
    desaparece.classList.remove('hide')});

  const cafeAmericano= divElemt.querySelector('#cafe');

  cafeAmericano.addEventListener('click',() => {
    getData('Desayunos')
    .then((snapshot)=> {
      snapshot.docs.forEach(doc => {
      console.log(doc.data()); 
      });
  });
});
  return divElemt;
};
