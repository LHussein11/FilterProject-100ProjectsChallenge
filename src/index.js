// Radera inte detta
import './styles/style.css'

// Arrays
const arrImages = [
    {
        image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Shirt',
        itemPrice: '$20'
    },
    {
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Shirt',
        itemPrice: '$25'
    },
    {
        image: 'https://images.unsplash.com/photo-1572689535562-3c54a15292d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Pants',
        itemPrice: '$50'
    },
    {
        image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Shirt',
        itemPrice: '$40'
    },
    {
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGV2aXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Pants',
        itemPrice: '$32'
    },
    {
        image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Jacket',
        itemPrice: '$60'
    },
    {
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Shoes',
        itemPrice: '$55'
    },
    {
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Shoes',
        itemPrice: '$45'
    },
    {
        image: 'https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        itemName: 'Jacket',
        itemPrice: '$75'
    },
]

// Functions
let cards = (i, className) => {
    // Get item
    let storeArea = document.querySelector('.storeArea');
    let cardArea = document.querySelector('.cardArea');

    // Create elements
    let cardItem = document.createElement('div');
    let cardText = document.createElement('div');
    let itemName = document.createElement('p');
    let itemPrice = document.createElement('p');
    let img = document.createElement('img');

    // Small shopping cart ontop of image
    let cartIconImg = document.createElement('div');

    // Add content
    img.src = i.image;
    itemName.innerHTML = i.itemName;
    itemPrice.innerHTML = i.itemPrice;
    cartIconImg.innerHTML = '<i class="fa fa-shopping-cart" id="cartAni"></i>'

    // Add class
    cardItem.classList.add('cardItem');
    cardItem.classList.add(`cardItem${i.itemName}`)
    img.classList.add('cardImg');
    cardText.classList.add('cardText')
    itemName.classList.add('itemName');
    itemPrice.classList.add('itemPrice');


    cartIconImg.classList.add('cartIconImg');

    // Append elements
    storeArea.appendChild(cardArea);
    cardArea.appendChild(cardItem);
    cardItem.appendChild(img);
    cardItem.appendChild(cartIconImg);
    cardItem.appendChild(cardText);
    cardText.append(itemName, itemPrice);

    //Search
    let searchInput = document.querySelector('.searchInput');
    searchInput.addEventListener('keyup', () => {
        let filter = searchInput.value.toUpperCase();
        console.log(filter);
        let valueText = itemName.textContent || itemName.innerText;
        if(valueText.toUpperCase().indexOf(filter) > -1){
            cardItem.style.display = 'flex';
        } else{
            cardItem.style.display = 'none';
        }
    })

    // Card image animation

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 1s ease-in-out';
        cartIconImg.style.transform = 'translate(-25px, -20px)';
        cartIconImg.style.transition = 'transform 1s ease-in-out'
    }) 


    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.transition = 'transform 1s ease-in-out';
        cartIconImg.style.transform = 'translate(0px, 0px)';
        cartIconImg.style.transition = 'transform 1s ease-in-out'
    }) 

    cartIconImg.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        cartIconImg.style.transform = 'translate(-25px, -20px)';
    })

    cartIconImg.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        cartIconImg.style.transform = 'translate(0px, 0px)';
    })

    // Explore & About button reset

    let exploreBtn = document.querySelector('.exploreBtn');
    let btnAbout = document.querySelector('.btnAbout');

    exploreBtn.addEventListener('click', () => {
        cardItem.style.display = 'none';
    })
    btnAbout.addEventListener('click', () => {
        cardItem.style.display = 'none';
    })
}

arrImages.forEach(cards);


// Btns 

let btnAll = document.querySelector('.btnAll');
let btnShirts = document.querySelector('.btnShirts');
let btnPants = document.querySelector('.btnPants');
let btnJackets = document.querySelector('.btnJackets');
let btnShoes = document.querySelector('.btnShoes');
let itemsCard = document.querySelectorAll('.cardItem');

let arrItemsCard = Array.from(itemsCard);


// EventListeners

btnAll.addEventListener('click', () => {
    arrItemsCard.forEach(item => {
        item.style.display = 'flex';
        console.log(item.style.display = 'flex');
    })
})

btnShirts.addEventListener('click', () => {
    arrItemsCard.forEach(item => {
        if(item.classList.contains('cardItemJacket') || item.classList.contains('cardItemShoes') || item.classList.contains('cardItemPants')) {
            item.style.display = 'none';
            console.log( item.style.display = 'none');
        } else {
            item.style.display = 'flex';
        }
    })
})

btnPants.addEventListener('click', () => {
    arrItemsCard.forEach(item => {
        if(item.classList.contains('cardItemJacket') || item.classList.contains('cardItemShoes') || item.classList.contains('cardItemShirt')){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    })
})

btnJackets.addEventListener('click', () => {
    arrItemsCard.forEach(item => {
        if(item.classList.contains('cardItemPants') || item.classList.contains('cardItemShoes') || item.classList.contains('cardItemShirt')){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    })
})

btnShoes.addEventListener('click', () => {
    arrItemsCard.forEach(item => {
        if(item.classList.contains('cardItemPants') || item.classList.contains('cardItemJacket') || item.classList.contains('cardItemShirt')){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    })
})

// Animation Image/Frame

let aboutImage = document.querySelector('.aboutImage img');
let frame = document.querySelector('.frame');

aboutImage.addEventListener('mouseenter', () => {
    console.log('Mouse entered image');
    frame.style.transform = 'translate(35px, 25.5px)'
    frame.style.transition = 'transform 1s ease-in-out'
})

aboutImage.addEventListener('mouseleave', () => {
    console.log('Mouse left image');
    frame.style.transform = 'translate(-20px, -20px)'
})

