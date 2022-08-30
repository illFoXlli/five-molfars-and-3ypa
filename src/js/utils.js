export function spinerOff() {
  return preloader.classList.add('visually-hidden');
}

export function spinerOn() {
  return preloader.classList.remove('visually-hidden');
}

export function getFromSS(key) {
  let data = localStorage.getItem(JSON.stringify(key));
  return JSON.parse(data);
}

export function saveToSS(key, res) {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(res));
}
