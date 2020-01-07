'use strict';
// Для того, чтобы вкладка была выбранной tab tab_active
// Для того, чтобы показывалось верное содержимое tab__content tab__content_active

const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i=0; i < tab.length; i++) {

    tab.item(i).addEventListener('click', function() {

        if ( ! tab.item(i).classList.contains('tab_active')) {
            for (let n = 0; n < tab.length; n++) {
                
                tab.item(n).classList.remove('tab_active');
                tab.item(i).classList.add('tab_active');

                tabContent.item(n).classList.remove('tab__content_active');
                tabContent.item(i).classList.add('tab__content_active');
            }
        }
        
    })
    
}