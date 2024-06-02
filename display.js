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
        console.error('Missing news details in URL parameters');
    }
}

// Load news details on page load
window.onload = loadNewsDetails;


// document.addEventListener("DOMContentLoaded", function () {
//     const params = new URLSearchParams(window.location.search);


//     const title = decodeURIComponent(params.get("title"));
//     const content = decodeURIComponent(params.get("content"));
//     const image = decodeURIComponent(params.get("img_url"));

//     newobj = {
//         newstitle: title,
//         newscontent: content,
//         newsimage: image
//     }

//     array = [...array, newobj]
//     console.log(array);
//     display()

// })

// const display = () => {
//     newsdetailscontainer = ''
//     array.map((el) => {
//         newsdetailscontainer.innerHTML = `
//         <div class="here">
//             <div class="news-image">
//                 <img src="${el.newsimage}" alt="News Image" id="newsImage">
//             </div>
//             <div class="news-content">
//                 <h1 id="newsTitle">${el.newstitle}</h1>
//                 <p id="newsDescription">${el.newscontent}</p>
//             </div>
//         </div>
//         `
//     })
// }