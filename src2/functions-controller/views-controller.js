import { calcularTotal, crearObjeto, eliminarPedido,arrPedidos } from "../functions-controller/funciones.js";

export const pintarArray = (eleHTML) => {
    eleHTML.innerHTML = '';
    const resultado = arrPedidos.reduce((accum, elem, indice) => {
      return accum + `
        <tr>
        <td>${elem.name}</td>
        <td>$${elem.precio}</td>
        <td>${elem.cantidad} unidades</td>
        <td><button id="${indice}" name="eliminar">x</button></td>
        </tr>`;
    }, '')
  
    export const listas = sabores.reduce((accum, sabor) => {
        return accum +
      `<li>${sabor}</li>`
      },"");  

    const tabla   = document.createElement("table");
    tabla.innerHTML =`
    <input type="text" id= "nombre" placeholder="Cliente">
    <th>Pedido</th>
    <th>Precio</th>
    <th>Cantidad</th>
     ${resultado} 
     `;
    eleHTML.appendChild(tabla);
    tabla.setAttribute('id','tabla-pedidos');
    
    const botones = tabla.querySelectorAll(`[name='eliminar']`)
    botones.forEach((btnDelete) => { btnDelete.addEventListener('click',(event) => {
        eliminarPedido();
        pintarArray(eleHTML)
    });
    })
  
    const divTotal   = document.createElement("div");
    eleHTML.appendChild(divTotal);
    const nombreCliente = tabla.querySelector('#nombre');
      calcularTotal(divTotal);
   
    const guardarPedido = document.createElement("button");
    guardarPedido.textContent = 'OK';
    eleHTML.appendChild(guardarPedido);
    guardarPedido.addEventListener('click', () =>{
    crearObjeto(nombreCliente, calcularTotal(divTotal));
    eleHTML.innerHTML = '';
  })
  };