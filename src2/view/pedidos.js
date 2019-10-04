export default () => {
  const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    
  const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <button id= "desayunos">DESAYUNO</button><div id="desaparece" class="hide"><button>CAFE AMERICANO</button><button>CAFE CON LECHE</button><button>SANDWICH DE JAMON Y QUESO</button><button>JUGO NATURAL</button></div>`;
  divElemt.innerHTML = viewAccessories;

  const desayunos = divElemt.querySelector('#desayunos');
  desayunos.addEventListener('click',()=>{
  const desaparece= divElemt.querySelector('#desaparece');
  desaparece.classList.remove('hide')});
  return divElemt;
};