import { nadis, chakras, tattvas } from './tattvas.js'
const vishva = {...tattvas, ...chakras, ...nadis}
const svg = document.getElementById('santana')

window.addEventListener('load', app, false)

function app() {
  let active = null
  const svgDoc = svg.contentDocument
  const aham = svgDoc.getElementById('aham')
  const overlay = document.getElementById('overlay')
  const info = document.getElementById('info')

  setListeners(vishva)

  overlay.addEventListener('click', close)
  
  function close (e) {
    overlay.classList.remove('open')
    if (active) {
        active.classList.remove('active')
    }
    active = null
    aham.classList.remove('has-active')
  }

  function setListeners(obj) {
    for (let item in obj) {
      let el = svgDoc.getElementById(item)
      if (el instanceof Element) {
        el.addEventListener('click', click(item))
      }
    }
  }

  function click(item) {
    return (e) => {
      let el = svgDoc.getElementById(item)
      if (active) {
        active.classList.remove('active')
        if (active == el) {
          active = null
          aham.classList.remove('has-active')
          return
        }
      }
      active = el
      info.innerHTML = vishva[item].text
      active.classList.add('active')
      aham.classList.add('has-active')
      overlay.classList.toggle('open')
    }
  }
}
