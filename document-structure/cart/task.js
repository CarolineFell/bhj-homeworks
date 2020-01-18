'use strict';

const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart');

class Cart {   
    constructor(box) {
        this.body = box;

        this.increaseQuantity = box.querySelectorAll('.product__quantity-control_inc');
        this.decreaseQuantity = box.querySelectorAll('.product__quantity-control_dec');
        this.productAdd = box.querySelectorAll('.product__add');

        this.quantityControlInc();
        this.quantityControlDec();
        this.addInCart(this.createElement);
    }

    quantityControlInc() {
        for (let thingy of this.increaseQuantity) {
            thingy.addEventListener('click', function(event) {
                let target = event.target.closest('.product');
                if (target) {
                    target.querySelector('.product__quantity-value').textContent++
                }
            }) 
        }    
    }

    quantityControlDec() {
        for (let thingy of this.decreaseQuantity) {
            thingy.addEventListener('click', function(event) {
                let target = event.target.closest('.product');
                if (target) {
                    if (target.querySelector('.product__quantity-value').textContent > 1) {
                        target.querySelector('.product__quantity-value').textContent--;
                    }
                }
            }) 
        }  
    }

    addInCart(add) {
        const body = this.body;

        for (let product of this.productAdd) {
            product.addEventListener('click', function() {

                cart.innerHTML += `
                    <div class="cart__title">Корзина</div>
                        <div class="cart__products">
                    </div>
                    `;

                let dataEvent = event.target.closest('.product').dataset.id;
                let targetEvent = event.target.closest('.product');
                let cartProducts = body.querySelector('.cart__products');
                let valueTarget = targetEvent.querySelector('.product__quantity-value');
                
                if (cartProducts.children.length !== 0) {  
                    if (cartProducts.querySelector(`[data-id="${dataEvent}"]`)) {
                        cartProducts.querySelector(`[data-id="${dataEvent}"]`).lastChild.textContent = Number(valueTarget.textContent);
                    } else {
                        cartProducts.appendChild(add(dataEvent, Number(valueTarget.textContent), targetEvent.querySelector('img').getAttribute('src')));    
                    }
                } else {
                    cartProducts.appendChild(add(dataEvent, Number(valueTarget.textContent), targetEvent.querySelector('img').getAttribute('src')));
                }
            })
        }
    }
    
    createElement(id, value, image) {

        let divDataId = document.createElement('div');
        let img = document.createElement('img');
        let divDataValue = document.createElement('div');
        let divDelete = document.createElement('div');

        divDataId.setAttribute('data-id', id);
        divDataId.classList.add('cart__product');

        img.setAttribute('src', image);
        img.classList.add('cart__product-image');
        
        divDataValue.classList.add('cart__product-count');
        divDataValue.textContent = value;

        divDelete.classList.add('delete');
        divDelete.setAttribute('title', 'Удалить товар');
        divDelete.innerHTML = "&#10008";
        divDelete.style.color = "red";

        divDelete.addEventListener('click', function(event){
            event.target.closest('.cart__product').remove();
        })

        divDataId.appendChild(divDelete);
        divDataId.appendChild(img);
        divDataId.appendChild(divDataValue);

        return divDataId;
    }
}

new Cart(document.body);