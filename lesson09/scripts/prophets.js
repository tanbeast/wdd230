const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // create h2 element for the full name
      let birth = document.createElement('p');
      let birthplace = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Use template string to build the full name
        
      birth.textContent =  `Date of Birth: ${prophet.birthdate}`;
      birthplace.textContent =  `Place of Birth: ${prophet.birthplace}`;
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Use template string for alt attribute
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); // Append the h2 element to the card
      card.appendChild(birth);
      card.appendChild(birthplace);
      card.appendChild(portrait); // Append the image element to the card
      cards.appendChild(card);// Add the section card to the "cards" div
    });
  }
  

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets);
  }
  
  getProphetData();
