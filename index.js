let container = document.querySelector(".News_conatiner")
let bottomcon = document.querySelector(".newsbottom")
let lastcon = document.querySelector(".Beforefooter")
let humbugger = document.querySelector(".humbugger")
let topSection = document.querySelector(".topSection")



// hambugger
let navLink = document.querySelector(".links ul")

const showMenu = () => {
    navLink.classList.toggle("activate")
    humbugger.classList.toggle("activate")
    console.log("yes");
}
// alert("yes")





let newArray = [];
const apicall = async () => {
    try {

        const data = await fetch("https://strender.vercel.app/api/posts");
        const response = await data.json()
        if (response.message === "Success") {

            newArray = [...newArray, ...response.data]

            console.log(newArray);

            fun3()
            newfun()
            function2()

        }
    } catch (err) {
        console.log(err);
    }


}
apicall()

const fun3 = () => {
    newArray.map((el) => {
        topSection.innerHTML = `
        <a href="display.html?image=${encodeURIComponent(el.img_url)}&title=${encodeURIComponent(el.title)}&content=${encodeURIComponent(el.content)}">
        <section class="topSection"  >
        <img src="${el.img_url}" alt="landing">
        </a>
    </section>`
    })
    console.log();
}


const newfun = () => {
    newArray.map((el, index) => {
        // console.log(el.title);
        if (index < 8) {
            container.innerHTML += `
            
            <div class="newsbox"  >
            <a href="display.html?image=${encodeURIComponent(el.img_url)}&title=${encodeURIComponent(el.title)}&content=${encodeURIComponent(el.content)}">
            <div class="newsimg">
                <img src="${el.img_url}" alt="newsimage">
            </div>
            <p>${el.createdAt}</p>
            <p class="newtitle">${el.title}</p>
            <div class="newdescription">
                ${el.summary} 
            </div>
            </a>
        </div>
            `
        }
    })

}

const function2 = () => {

    newArray.map((el, index) => {
        if (index >= 8 && index <= 12) {
            bottomcon.innerHTML += `
            
            <div class="newsbox" >
            <a href="display.html?image=${encodeURIComponent(el.img_url)}&title=${encodeURIComponent(el.title)}&content=${encodeURIComponent(el.content)}">
             <div class="newsimg">
                <img src="${el.img_url}" alt="newsimage">
            </div>
            <p class="date">${el.createdAt}</p>
            <p class="newtitle">${el.title}</p>
            <div class="newdescription">
                ${el.summary}
            </div>
            </a>
        </div>
        `
        }
    })
}

// function redirectToNewsDetails(title, content, img_url) {
//     const url = `display.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&image=${encodeURIComponent(img_url)}`;
//     window.location.href = url;
// }