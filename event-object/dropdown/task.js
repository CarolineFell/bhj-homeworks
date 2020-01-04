'use strict';

const dropdownList = document.querySelectorAll('.dropdown__list'); 
const dropdownValue = document.querySelectorAll('.dropdown__value'); 
const dropdownLink = document.querySelectorAll('.dropdown__link'); 

for (let i=0; i < dropdownLink.length; i++) {
    const dropdownItem = dropdownLink.item(i).previousSibling.parentElement;
    
    for (let n=0; n < dropdownValue.length; n++) {
        for (let j=0; j < dropdownList.length; j++) {

            dropdownValue.item(n).addEventListener('click', function(event) {
                event.preventDefault();
                dropdownList.item(j).classList.add('dropdown__list_active');
            })

            dropdownItem.addEventListener('click', function(event) {
                event.preventDefault();
                dropdownValue.item(n).textContent = dropdownLink.item(i).textContent;
                dropdownList.item(j).classList.remove('dropdown__list_active');
            })
        }
    }
}