'use strict';

const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownList = document.querySelectorAll('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');

for (let i = 0; i < dropdownValue.length; i++) {
    
    dropdownValue.item(i).addEventListener('click', function() {
        dropdownList.item(i).classList.toggle('dropdown__list_active');

        for (let n = 0; n < dropdownList.length; n++) {
            if (dropdownList.item(n).classList.contains('dropdown__list_active') && n != i) {
                dropdownList.item(n).classList.remove('dropdown__list_active');                
            }            
        }

        const dropdownLinkArray = Array.from(dropdownLink);
        let dropdownLinkArrayFiltered = dropdownLinkArray.filter(function(dropdownLink) {
            return dropdownLink.closest('ul.dropdown__list_active') ? true : false;
        });

        for (let j = 0; j < dropdownLinkArrayFiltered.length; j++) {
            dropdownLinkArrayFiltered[j].addEventListener('click', function(event) {
                event.preventDefault();
                dropdownList.item(i).classList.remove('dropdown__list_active');
                dropdownValue.item(i).textContent = dropdownLinkArrayFiltered[j].textContent;
            })
        }
    });
} 