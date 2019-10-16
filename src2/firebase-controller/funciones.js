export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};


//para separar
export const pintarArray = (arrayPrint, eleHTML) => {
  eleHTML.innerHTML = '';
  const resultado = arrayPrint.reduce((accum, elem) => {
    return accum + `
      <tr>
      <td>${elem.name}</td>
      <td>$${elem.precio}</td>
      <td>${elem.cantidad} unidades</td>
      </tr>`;
  }, '')
  const tabla   = document.createElement("table");
  tabla.innerHTML =`
  <th>Pedido</th>
  <th>Precio</th>
  <th>Cantidad</th>
   ${resultado}`;
  eleHTML.appendChild(tabla);
 
};