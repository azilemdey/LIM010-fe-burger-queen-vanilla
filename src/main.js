import { changeView } from './view-controler/router.js/index.js'

const init = () =>{
    window.addEventListener('hashchange',() => {
      changeView(window.location.hash)
    })

}
window.addEventListener('load', init);