export function getProduct() {
  return fetch('https://cors.io/?https://trends.hem.com/snapshot').then(response => {
    return response.json();
  });
}
