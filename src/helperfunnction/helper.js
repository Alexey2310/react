export const findAndAddClass=(event,findclass,addclass)=> {
  document.body.classList.toggle('_lock')
const $el =document.querySelector('.'+findclass)
$el.classList.toggle(addclass)
event.target.classList.toggle(addclass)
} 