// we have an API of Designs
// we want to fetch datd form our API of design and we want to render them to the DOM
// we ant to make a list of design with  id, name, image, likes
// For upadeted likes
let desginData = {};
function updateLikes(id) {

    const newDesgin = desginData.filter((design=> design.id === id))
    newDesgin.likes= ++desginData.likes;
    desginData = {...desginData, newDesgin}
  }
// Creat card for all designs
function createCardElement(design){
    let card =document.createElement("div")
    card.classList.add("card")
    let h2 = document.createElement("h2");
   h2.textContent = design.name
   
   let img = document.createElement("img");
   
   img.classList.add("design-style")
   img.src = design.image;

   let p = document.createElement("p");
   p.textContent = `${design.likes} Likes`;

   let button = document.createElement("button")
   button.addEventListener("click", () => {
    //update likes element
    p.textContent = `${design.likes += 1} Likes`;
    //patch
    updateLikes(design.id, design.likes)
   })
   button.classList.add("like-btn")
   button.id = design.id
   button.textContent = "Like ❤️"

   card.append(h2, img, p, button)
   document.getElementById("design-collection").appendChild(card);
}

// Fetch all designs from the API with DOM
document.addEventListener("DOMContentLoaded", () => {

fetch("https://raw.githubusercontent.com/edankhra/flatiron-Phase-1-Project/main/db.json")
   .then(res => res.json())
   .then(({designs}) => {
    console.log(designs, 'designs');
    
    desginData = designs; 
    designs.forEach(design => createCardElement(design))
   }
    )
})
// Event listener for submitting the contact form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  // Handle form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // Perform necessary actions with the form data
});




