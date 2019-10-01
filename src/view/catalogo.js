export default () => {
    const viewCatalogo = `<h2>OTRA VISTA</h2>`;
  
    const divElem = document.createElement('div');
    divElem.innerHTML = viewCatalogo;
  
    return divElem;
  }