// aqui exportaras las funciones que necesites
export default () => {
  const viewHome = `<h2>HOLA</h2>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  return divElem;
}