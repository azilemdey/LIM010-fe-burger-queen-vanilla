import {getData} from "../functions-controller/firebase-controller.js";

export default () => {
    const viewCatalogue = `
  <h2 class="text-center">ORDENES</h2><div id="orden"><button id="ok">OK</button><div>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewCatalogue;

    const orden = divElemt.querySelector('#orden');
    const ok = divElemt.querySelector('#ok');
    getData('Ordenes').then((snapshot) => {
      snapshot.docs.forEach(doc => {
        ok.addEventListener('click',()=>{
          const tablaOrder = document.createElement("table");
           console.log(doc.data().productos[0]);
          orden.appendChild(tablaOrder);
          tablaOrder.innerHTML=doc.data().cliente;

        })
      
      });
    })
    return divElemt;
};


