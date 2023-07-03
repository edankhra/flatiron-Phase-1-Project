// we have an API of Designs



// we want to fetch datd form our API of design and we want to render them to the DOM


// we ant to make a list of design with  id, name, image, likes


//let addDesign = false;
function updateLikes(id, newNumberOfLikes) {
    fetch(`http://localhost:3000/designs/${id}`, {
      method: "PATCH",
      headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
  
    body: JSON.stringify({
      "likes": newNumberOfLikes
    })
    })
    
  }

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

// function sendItOut(newDesign){
//     fetch("http://localhost:3000/designs", {
//       method: "POST",
//        headers:
  
//           {
//             "Content-Type": "application/json",
//              Accept: "application/json"
//           },
  
//       body: JSON.stringify({
//             ...newDesign,
//             "likes": 0
//       })
//     }).then(
//       (response) => response.json()
//     )
//     .then(responseToy  => createCardElement(responseDesign))
//   }


document.addEventListener("DOMContentLoaded", () => {

fetch("http://localhost:3000/designs")
   .then(res => res.json())
   .then(designs => designs.forEach(design => createCardElement(design)))
})

// const form = document.querySelector("form.add-design-form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = Object.fromEntries(new
//         FormData(e.target));
//         console.log(formData);
//         sendItOut(formData)
// })




//   const addBtn = document.querySelector("#new-design-btn");
//   const designFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addDesign = !addDesign;
//     if (addDesign) {
//       designFormContainer.style.display = "block";
//     } else {
//       designFormContainer.style.display = "none";
//     }
//   });
// })