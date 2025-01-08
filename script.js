// Tooggle Navbar
const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
});

// Search for products
const searchButton = document.getElementById('search');
const searchBar = document.getElementById('search-bar');
const items = document.querySelectorAll('#items .card');
const itemsContainer = document.getElementById('items');

searchButton.addEventListener('click', function() {
    const searchTerm = searchBar.value.toLowerCase();
    let foundMatch = false;

    items.forEach(item => {
        const itemName = item.querySelector('h4').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            foundMatch = true;
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });

    if (!foundMatch) {
        // SweetAlert for product not found
        Swal.fire({
            iconHtml: '😞',
            title: 'Product not found',
            text: 'Try a different search term.',
            confirmButtonText: 'OK',
            customClass: {
                icon: 'custom-icon',
            }
        });
    }
});

const resetButton = document.createElement('button');
resetButton.textContent = 'X';
resetButton.id = 'reset-button';
resetButton.style.marginLeft = '10px';
resetButton.style.cursor = 'pointer';
resetButton.style.color = '#fff';
resetButton.style.fontSize = '1.3rem';
resetButton.style.padding = '10px';
resetButton.style.borderRadius = '10px';
resetButton.style.background = '#FF9900';

searchBar.parentNode.appendChild(resetButton);

resetButton.addEventListener('click', function() {
    searchBar.value = '';
    items.forEach(item => {
        item.classList.remove('highlight');
    });
});

const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: #f0c4a4;
        transition: background-color 0.3s ease;
    }
    .highlight:hover {
        background-color: #e8b38a;
    }
`;
document.head.appendChild(style);