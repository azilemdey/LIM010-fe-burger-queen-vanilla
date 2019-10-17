export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};


//para separar
export const pintarArray = (arrayPrint, eleHTML) => {

  const resultado = arrayPrint.reduce((accum, elem) => {
    return accum + 
    `<tr>
      <td>${elem.name} </td>
      <td>$${elem.precio}</td>
      <td>${elem.cantidad}</td>
      </tr>`
  }, '')
  eleHTML.innerHTML = resultado};