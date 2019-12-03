import {getData} from "../functions-controller/firebase-controller.js";

export default () => {
    const viewCatalogue = `
  <h2 class="text-center">ORDENES</h2><button id="ok" class="btn-ordenes">VER TODAS LAS ORDENES</button><div id="orden"><div>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewCatalogue;

    const orden = divElemt.querySelector('#orden');
    const ok = divElemt.querySelector('#ok');
    getData('Ordenes').then((snapshot) => {
      snapshot.docs.forEach(doc => {
        ok.addEventListener('click',()=>{
         const tablaOrder = document.createElement("div");
          orden.appendChild(tablaOrder);
          tablaOrder.innerHTML+= `<p>Cliente: ${doc.data().cliente}</p>`;
          doc.data().productos.forEach( product =>{
         tablaOrder.innerHTML += `<p>${product.name}<p>`})
        
        })
      
      });
    })
    return divElemt;
};


