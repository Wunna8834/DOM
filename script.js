let children = [
    {
        name: "Alfred",
        gender: "Male",
        age: 10,
        image: "Alfred.jpg",
    },

    {
        name: "Ana",
        gender: "Female",
        age: 8,
        image: "Ana.jpg",
    },

    {
        name: "Ben",
        gender: "Male",
        age: 9,
        image: "Ben.jpg",
    },

    {
        name: "Cathy",
        gender: "Female",
        age: 10,
        image: "Cathy.jpg",
    },

    {
        name: "Edward",
        gender: "Male",
        age: 12,
        image: "Edward.jpg",
    },

    {
        name: "Emily",
        gender: "Female",
        age: 7,
        image: "Emily.jpg",
    },

    {
        name: "Jenny",
        gender: "Female",
        age: 10,
        image: "Jenny.jpg",
    },

    {
        name: "Kate",
        gender: "Female",
        age: 9,
        image: "Kate.jpg",
    },

    {
        name: "Michael",
        gender: "Male",
        age: 8,
        image: "Michael.jpg",
    },

    {
        name: "Wayne",
        gender: "Male",
        age: 10,
        image: "Wayne.jpg",
    },
];

let kids = [];
const childrenCardTemplate = document.querySelector("[data-children-template]");
const childrenCardContainer = document.querySelector("[data-children-list-container]");
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    kids.forEach(kid => {
        const isVisible = kid.name.toLowerCase().includes(value);
        
        kid.element.classList.toggle("hide", !isVisible);
    });
});
kids = children.map(child => {
    const card = childrenCardTemplate.content.cloneNode(true).children[0];
    const image = card.querySelector("[data-image]");
    const name = card.querySelector("[data-name]");
    const age = card.querySelector("[data-age]");
    const gender = card.querySelector("[data-gender]");
    image.src = child.image;
    name.textContent = child.name;
    age.textContent = "Age: " + child.age;
    gender.textContent = child.gender;
    childrenCardContainer.append(card);
    return { name: child.name, age: child.age, gender: child.gender, element: card, id: child.gender}
    
});
console.log(kids);
//activate the buttons
function filteredGender(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
        console.log(value);
    });
    //Display Male or Female upon button
    let elements = document.querySelectorAll(".card");
    const maleOnly = kids.filter(kid => kid.gender === 'Male');
    const femaleOnly = kids.filter(kid => kid.gender === 'Female');
    console.log(maleOnly);
    console.log(femaleOnly);
    elements.forEach(element => {
        console.log(element);
        let genders = document.querySelectorAll(".gender");
        if(value == 'all'){
            element.classList.remove("hide");
        }else{
            if(value == element.lastElementChild.innerText.toLowerCase()){
                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
        
    });
}
//initially display all button
window.onload = () => {
    filteredGender('all');
}




