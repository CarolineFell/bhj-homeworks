'use strict';

const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size');
const colorText = document.querySelectorAll('div.book__control_color > a.color');
const colorBackground = document.querySelectorAll('div.book__control_background > a.color');

for (let i = 0; i < fontSize.length; i++) {

    // ---------------------- FontSize ---------------------- //
    fontSize.item(i).addEventListener('click', clickFontSize);

    function clickFontSize(event) {
        if ( ! event.target.classList.contains('font-size_active')) {
            for (let n = 0; n < fontSize.length; n++) {
                if (fontSize.item(n).classList.contains('font-size_active')) {
                    fontSize.item(n).classList.remove('font-size_active');
                }
            }
            event.target.classList.add('font-size_active');
        }
        event.preventDefault(); 

        if (book.classList.contains('book_fs-small')) {
            book.classList.remove('book_fs-small');
        } else if (book.classList.contains('book_fs-big')) {
            book.classList.remove('book_fs-big');
        }
         
        if (event.target.dataset.size) {
            book.classList.add('book_fs-' + event.target.dataset.size);
        }     
    }  

    // ---------------------- ColorText ---------------------- //
    colorText.item(i).addEventListener('click', clickTextColor);

    function clickTextColor(event) {
        if ( ! event.target.classList.contains('color_active')) {
            for (let n = 0; n < colorText.length; n++) {
                if (colorText.item(n).classList.contains('color_active')) {
                    colorText.item(n).classList.remove('color_active');
                }
            }
            event.target.classList.add('color_active');
        }
        event.preventDefault(); 
    
        if (book.classList.contains('book_color-gray')) {
            book.classList.remove('book_color-gray');
        } else if (book.classList.contains('book_color-whitesmoke')) {
            book.classList.remove('book_color-whitesmoke');
        }
        
        if (event.target.dataset.color) {
            book.classList.add('book_color-' + event.target.dataset.color);
        }  
    } 

    // ---------------------- ColorBackground ---------------------- //
    colorBackground.item(i).addEventListener('click', clickBackgroundColor);

    function clickBackgroundColor(event) {
        if ( ! event.target.classList.contains('color_active')) {
            for (let n = 0; n < colorBackground.length; n++) {
                if (colorBackground.item(n).classList.contains('color_active')) {
                    colorBackground.item(n).classList.remove('color_active');
                }
            }
            event.target.classList.add('color_active');
        }
        event.preventDefault(); 
    
        if (book.classList.contains('book_bg-gray')) {
            book.classList.remove('book_bg-gray');
        } else if (book.classList.contains('book_bg-black')) {
            book.classList.remove('book_bg-black');
        }
            
        if (event.target.dataset.color) {
            book.classList.add('book_bg-' + event.target.dataset.color);
        }  
    } 
}