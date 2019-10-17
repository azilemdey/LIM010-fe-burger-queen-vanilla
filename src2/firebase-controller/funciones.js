export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};


//para separar
export const pintarArray = (arrayPrint, eleHTML) => {
  eleHTML.innerHTML = '';
  const resultado = arrayPrint.reduce((accum, elem, indice) => {
    return accum + 
      `<tr>
      <td>${elem.name} </td>
      <td>$${elem.precio}</td>
      <td>${elem.cantidad}</td>
      <td><button data-indice = ${indice} id = "eliminar">x</button></td>
      </tr>`
  }, '')
  eleHTML.innerHTML = resultado};

/* export const eliminarObj = (arr, indice) =>{
    const newArray = [...arr];
    newArray.splice(indice, 1);
    return newArray;
  }; */