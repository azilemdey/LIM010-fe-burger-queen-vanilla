export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};


//para separar
export const pintarArray = (arrayPrint, eleHTML) => {
  eleHTML.innerHTML = '';
  const resultado = arrayPrint.reduce((accum, elem) => {
    return accum + `<p>${elem.name}  $${elem.precio}  ${elem.cantidad} unidades</p>`;
  }, '')
  eleHTML.innerHTML = resultado};