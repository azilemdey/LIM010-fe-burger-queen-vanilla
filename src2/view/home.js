export default () => {
    const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra página!</h2>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
};