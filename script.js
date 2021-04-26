let API_key = `563492ad6f91700001000001a250d28a3079481e95fde5a430557d5a`;
let url = `https://api.pexels.com/v1/curated?per_page=24`;

let main = document.querySelector("main"); // Accessing the Main property in the HTML //

fetch(url, { headers: { Authorization: API_key } }) // linking to the API key //
    .then((res) => res.json())
    .then((data) =>  {
        data.photos.forEach((e) => { // This is a Array >>>>>>> e is a variable name which means 'each of these' //
        let img = document.createElement("div");
        img.className = "box"; // Box =  I will now style the grid container using CSS attributes such as width, height etc in the CSS. //  //
        img.style.backgroundImage = `url(${e.src.medium})`; // Accessing the CSS property //
        main.appendChild(img);
        });
    })
    .catch((err) => console.log(err));



// I used a API website called Pexels to gain access to real-time  curated photos. //

// Pexels site: "We add at least one new photo per hour to our curated list so that you always get a changing selection of trending photos" // 

// Javascript rule: When adding CSS to Javascript take away the hyphen and capitalize the second word. //
// Example:  background-image >>>>>>>>> backgroundImage.
