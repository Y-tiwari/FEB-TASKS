let carts = document.querySelectorAll('.add-cart');

let products = {
    {
        name:'gray T-shirt',
        tag ; 'gray T-shirt',
        price ;15.93 ,
        incart ;0
    },
    {
        name:'gray Hoddie',
        tag ; 'gray Hoddie',
        price ;20 ,
        incart ;0 
    },
    {
        name:'Black T-shirt',
        tag ;'Black T-shirt',
        price ;25 ,
        incart ;0
    }
 
}

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalcost(products[i])
    })
}

function onLoadcartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers) {
        document.querySelector('cart span').textContent = product
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers')

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers')
        document.querySelector('.cart span').textContent = productNumbers;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(product);
}
  function setItem(product) {
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = json.parse(cartItems);

   if (cartItems != null) {
    
    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
      cartItems[product.tag].incart += 1;
   } else {
    product.incart = 1;
    cartItems = {
        [product.tag]: product
    }
   }
   
    localStorage.setItem("productsInCart", json.stringify(cartItems));
  }
  function totalcost(product) {
    // console.log("the product price is",product.price);
   let cartcost = localStorage.getItem('totalcost');
   
   console.log("my cartcost is",cartcost);
   console.log(typeof cartcost );

   if (cartcost !=null) {
    cartcost = parseInt(cartcost);
     localStorage.setItem("totalcost",cartcost +product.price);
   } else {
    localStorage.setItem("totalcost",product.price);
   }

    
  }
onLoadcartNumbers();