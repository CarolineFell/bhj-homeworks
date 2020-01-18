'use strict';

const items = document.getElementById('items');
const loader = document.getElementById('loader');

let request = new XMLHttpRequest();
let url = 'https://netology-slow-rest.herokuapp.com';
request.open('GET', url);
request.setRequestHeader('Content-Type', 'application/json');
request.addEventListener('readystatechange', showCurrency);
request.send();

function showCurrency() {
    if (request.readyState === 4 && request.status === 200) {
        loader.classList.remove('loader_active');

        const valute = JSON.parse(request.responseText).response.Valute;

        for (const element in valute) {
            const item = `<div class="item">
                            <div class="item__code">
                                ${valute[element].CharCode}
                            </div>
                            <div class="item__value">
                                ${valute[element].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                          </div>`;

            items.insertAdjacentHTML('beforeend', item);
        }
    }
}