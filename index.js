let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

console.log(saveEl);

function increment(){
    count++;
    countEl.textContent = count;    
}

function save(){
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent = 0; // zerujemy wyświetlanie w "count-el"
    count = 0; // zeujemy licznik wejść - zmienna: count
}
