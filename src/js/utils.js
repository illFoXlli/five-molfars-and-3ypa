export function spinerOff() {
  return preloader.classList.add('visually-hidden');
}

export function spinerOn() {
  return preloader.classList.remove('visually-hidden');
}

export function getFromSS(key) {
  let data = sessionStorage.getItem(JSON.stringify(key));
  return JSON.parse(data);
}

export function saveToSS(key, res) {
  sessionStorage.setItem(JSON.stringify(key), JSON.stringify(res));
}
