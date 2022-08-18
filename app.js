'use strict';

var subdomains = document.querySelector('#subs');
var btn = document.querySelector('#btn');
var table = document.querySelector('#table');

btn.addEventListener('click', () => {
    table.innerHTML = '';
    var filtered = new Array();
    var number = document.querySelector('#number').value;
    var number = Number(number);
    var allsubs = subdomains.value.split("\n");
    let pattern = new RegExp(`(\\.[\\w-]+){${number}}$`, 'gi');
    allsubs.forEach(sub => {
        let sub2 = sub.match(pattern);
        if (sub2 != null && filtered.includes(sub2[0].slice(1)) === false) {
            filtered.push(sub2[0].slice(1));
        }
    });
    filtered.forEach(f => {
        let tr = document.createElement("tr");
        let td = document.createElement('td');
        td.textContent = f;
        tr.appendChild(td);
        table.appendChild(tr);
    });
})
