// Function to toggle between grid and list view
function toggleView() {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const main = document.getElementById('members')

    gridButton.addEventListener('click', () => {
        main.classList.remove('list');
        main.classList.add('grid');
    });
    
    listButton.addEventListener('click', () => {
        main.classList.remove('grid');
        main.classList.add('list');
    });
}

// Function to display member information from JSON
async function displayMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    // Create a new section for the list of members
    const article = document.getElementById('members')
    article.classList.add('list'); // Initial view is list
    // Iterate over each member and create list items
    data.members.forEach(member => {
        const section = document.createElement('section');

        const h3 = document.createElement('h3');
        h3.textContent = member.name;
        section.appendChild(h3);

        const pYear = document.createElement('p');
        pYear.textContent = member.year;
        section.appendChild(pYear);

        const a = document.createElement('a');
        a.href = member.website;
        a.textContent = 'Details';
        a.target = '_blank';
        section.appendChild(a);

        article.appendChild(section);
    });

    // Append the list of members to the main container
    main.appendChild(article);
}

// Call the displayMembers function to populate the page
displayMembers();

// Call the toggleView function to enable view toggling
toggleView();
