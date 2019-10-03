export default () => {
    const viewAccessories = `
  <h2 class="text-center">PEDIDOS</h2>
  <div><button>DESAYUNO</button><button>ALMUERZO Y CENA</button></div><div><button>CAFE AMERICANO</button><button>CAFE CON LECHE</button><button>SANDWICH DE JAMON Y QUESO</button><button>JUGO NATURAL</button>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewAccessories;
    return divElemt;
};