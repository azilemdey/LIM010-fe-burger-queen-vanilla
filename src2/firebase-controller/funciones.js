export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};


//para separar

export const pintarArray = (arrayPrint, eleHTML) => {
  eleHTML.innerHTML = '';
  const resultado = arrayPrint.reduce((accum, elem, indice) => {
    return accum + `
      <tr>
      <td>${elem.name}</td>
      <td>$${elem.precio}</td>
      <td>${elem.cantidad} unidades</td>
      <td><button id="${indice}" name="eliminar">x</button></td>
      </tr>`;
  }, '')

  const tabla   = document.createElement("table");
  tabla.innerHTML =`
  <th>Pedido</th>
  <th>Precio</th>
  <th>Cantidad</th>
   ${resultado}`;
  eleHTML.appendChild(tabla);
  tabla.setAttribute('id','tabla-pedidos');
  
  const botones = tabla.querySelectorAll(`[name='eliminar']`)
  botones.forEach((btnDelete) => { btnDelete.addEventListener('click',(event)=>{
    const getIndex=event.target.id;
    arrayPrint.splice(getIndex,1);
    // eleHTML.innerHTML = '';
    console.log(arrayPrint);
    
  });
  })
};

