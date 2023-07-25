// Solution after getting a hint from the solution video
const main = document.querySelector('main');
let html = '';

for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    html += `
        <h2>${pet.name}</h2>
        <h3>${pet.type} | ${pet.breed}</h3>
        <p>Age: ${pet.age}</p>
        <img src="img/${pet.photo}" alt="${pet.breed}">
    `;
}

main.insertAdjacentHTML('beforeend', html);

// document.querySelector('main').innerHTML = html;

/* ====== MY ATTEMPT ======

let petName = [];
let petType = [];
let petBreed = '';
let petAge = '';
let petPhoto = '';

for (let i = 0; i < pets.length; i++) {
  let name = pets[i].name;
  let type = pets[i].type;
  if (true) {
    
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
      items += `<li> ${arr[i]}</li>`;
  }
  return items;
}

let html = `
${createListItems(petName)}
${createListItems(petType)}

`;

document.querySelector('main').innerHTML = html;

for (let petProp in pets) {
  console.log(pets[petProp]);
}

console.log(`${}`)

console.log(pets[0].name);
*/
