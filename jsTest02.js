function changeColor() {
    const element = document.querySelectorAll('td');
    for (let i = 0; i < element.length; i++) {
        element[i].classList.toggle('table--black');
        
    }
}

const element = document.querySelectorAll('td');
for (let i=0 ; i < element.length; i++) {
    element[i].addEventListener('click', changeColor);
}