const item = document.querySelectorAll('.disiases__item');
const mapItem = document.querySelectorAll('.disiases__map small');

for (let i=0; i<item.length; i++) {
    item[i].addEventListener('click', function(){
        item[i].classList.toggle('active');
        mapItem[i].classList.toggle('active');
    })
}