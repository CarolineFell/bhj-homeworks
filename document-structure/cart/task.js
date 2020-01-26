'use strict';

//product__quantity-value --> cart__product-count

const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart');

cart.innerHTML += `
                    <div class="cart__title">Корзина</div>
                        <div class="cart__products">
                    </div>
                    `;

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
                    target.querySelector('.product__quantity-value').textContent++;
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

                let productDatasetId = event.target.closest('.product').dataset.id;
                let product = event.target.closest('.product');
                let cartProducts = body.querySelector('.cart__products');
                let productQuantityValue = product.querySelector('.product__quantity-value');
                
                if (cartProducts.children.length !== 0) {  
                    if (cartProducts.querySelector(`[data-id="${productDatasetId}"]`)) {
                        let oldOne = Number(cartProducts.querySelector(`[data-id="${productDatasetId}"]`).lastChild.textContent);
                        cartProducts.querySelector(`[data-id="${productDatasetId}"]`).lastChild.textContent = Number(productQuantityValue.textContent);
                        console.log('oldOne ' + oldOne)
                        
                        if (productQuantityValue.textContent) {
                            let total = oldOne + Number(productQuantityValue.textContent)
                            cartProducts.querySelector(`[data-id="${productDatasetId}"]`).lastChild.textContent = total;
                            console.log('add to product ' + Number(productQuantityValue.textContent))
                            console.log('total ' + total)
                        }
                        
                    } else {
                        cartProducts.appendChild(add(productDatasetId, Number(productQuantityValue.textContent), product.querySelector('img').getAttribute('src')));  
                        console.log('add another one product ' + productQuantityValue.textContent) 
                    }
                } else {
                    cartProducts.appendChild(add(productDatasetId, Number(productQuantityValue.textContent), product.querySelector('img').getAttribute('src')));
                    console.log('add product ' + cartProducts.textContent)
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

        divDataId.appendChild(divDelete); // <div class="delete" title="Удалить товар" style="color: red;">✘</div>
        divDataId.appendChild(img); // <img src="https://static-eu.insales.ru/images/products/1/7875/257179331/4515850.jpg" class="cart__product-image">
        divDataId.appendChild(divDataValue); // <div class="cart__product-count">1</div>

        return divDataId; // <div data-id="1" class="cart__product"></div>
    }
}

new Cart(document.body);