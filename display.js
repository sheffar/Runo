let newsdetailscontainer = document.querySelector('.news-details-container')
let array = []

// Function to load news details when redirected
function loadNewsDetails() {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const content = params.get('content');
    const image = params.get('image');

    if (title || description || image) {
        document.querySelector('#newsTitle').innerText = title;
        document.querySelector('#newsDescription').innerText = content;
        document.querySelector('#newsImage').src = image;
    } else {
      return console.error('Missing news details in URL parameters');
    }
}

// Load news details on page load
window.onload = loadNewsDetails;


