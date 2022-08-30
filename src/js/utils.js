import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
// включить спинет
export function spinerOff() {
  return preloader.classList.add('visually-hidden');
}
// вык спинет
export function spinerOn() {
  return preloader.classList.remove('visually-hidden');
}
// получение с LS
export function getFromSS(key) {
  let data = localStorage.getItem(JSON.stringify(key));
  return JSON.parse(data);
}
// запись в LS
export function saveToSS(key, res) {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(res));
}

export function notificationOk() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
  });
}

export function notificationErorr() {
  Swal.fire({
    showConfirmButton: false,
    title: 'Opp...!',
    text: 'Search did not yield results.',
    imageUrl: 'https://picsum.photos/300/300',
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: 'Custom image',
    timer: 2500,
  });
}
