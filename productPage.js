// counter
let counter = 1;

function increament() {
    if (counter < 10) {
        counter++;
    }
    updateQuantity();
}

function decreament() {
    if (counter > 1) {
        counter--;
    }
    updateQuantity();
}

function updateQuantity() {
    document.getElementById("output").innerText = counter;
}


// product includes
const products = [
    { id: "1", name: "Coloured Dogs", price: "$10", image: "img/special3.png" },
    { id: "2", name: "Cozy Kitty Cuddles Plush Cat", price: "$15.50", image: "img/new7.webp" },
    { id: "3", name: "Reversible Octopus", price: "$18.20", image: "img/new8.webp" },
    { id: "4", name: "Teddy Bear with Cap", price: "$21.50", image: "img/new9.webp" },
    { id: "5", name: "Cozy Sponge Bob", price: "$13.99", image: "img/new10.webp" },
    { id: "6", name: "Catto", price: "$15.50", image: "img/new11.webp" },
    { id: "7", name: "Catto White", price: "$16.99", image: "img/new12.webp" },
    { id: "8", name: "White Floppy Plush Hat", price: "$23", image: "img/new13.jpg" },
    { id: "9", name: "Strawberry Bunny", price: "$16.10", image: "img/new14.webp" },
    { id: "10", name: "Pikachu", price: "$12.10", image: "img/new15.webp" },
    { id: "11", name: "Doremon", price: "$12.10", image: "img/new16.webp" },
    { id: "12", name: "Snuggle Buddies", price: "$30.99", image: "img/new3.jpg" },
    { id: "13", name: "Pink Panther", price: "$12.10", image: "img/new17.webp" },
]

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const product = products.find(p => p.id === productId);

if (product) {
    document.querySelector('.product-image').src = product.image;
    document.querySelector('.product-name').textContent = product.name;
    document.querySelector('.product-price').textContent = product.price;

}