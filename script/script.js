document.addEventListener('DOMContentLoaded', function() {

    // Dati per il carosello, aggiungendo il nuovo oggetto
    const data = [
        {
            "img": "./images/desktop-image-hero-1.jpg",
            "title": "Discover innovative ways to decorate",
            "text": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            "shop": "Shop now"
        },
        {
            "img": "./images/desktop-image-hero-2.jpg",
            "title": "We are available all across the globe",
            "text": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            "shop": "Shop now"
        },
        {
            "img": "./images/desktop-image-hero-3.jpg",
            "title": "Manufactured with the best materials",
            "text": "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we get what customers want for their home and office.",
            "shop": "Shop now"
        }
    ];

    // Indice corrente
    let currentIndex = 0;

    // Selettori degli elementi
    
    const titleElement = document.querySelector('aside h1');
    const textElement = document.querySelector('aside p');
    const shopButton = document.querySelector('aside span');
    const navElement = document.querySelector('nav'); // Selettore per l'elemento <nav>
    
    // Funzione per caricare il contenuto del carosello e cambiare background
    function loadCarouselContent(index) {
        const item = data[index];
        
        titleElement.textContent = item.title;
        textElement.textContent = item.text;
        shopButton.textContent = item.shop;

        // Modifica il background-image di <nav>
        navElement.style.backgroundImage = `url(${item.img})`;
    }

    // Gestione pulsante "next"
    document.getElementById('next').onclick = function() {
        currentIndex = (currentIndex + 1) % data.length; // Avanza e torna al primo elemento
        loadCarouselContent(currentIndex);
    }

    // Gestione pulsante "prev"
    document.getElementById('prev').onclick = function() {
        currentIndex = (currentIndex - 1 + data.length) % data.length; // Torna indietro e torna all'ultimo elemento
        loadCarouselContent(currentIndex);
    }

    // Carica il contenuto iniziale
    loadCarouselContent(currentIndex);


   const listItem = document.getElementById('listItem');

   const hamburger = document.getElementById('hamburger');
   const body = document.querySelector('body');

   const close = document.getElementById('close');


   hamburger.onclick = function() {
    listItem.style.display = 'flex';
    body.style.opacity = 0.5;
   }

   close.onclick = ()=> {
    listItem.style.display = 'none';
    body.style.opacity = 1;
   }
});


