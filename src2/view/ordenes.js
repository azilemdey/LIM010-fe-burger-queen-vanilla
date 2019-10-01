export default () => {
    const viewCatalogue = `
  <h2 class="text-center">Conejos</h2>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewCatalogue;
    return divElemt;
};