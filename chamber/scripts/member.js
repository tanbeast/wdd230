async function displayMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const container = document.getElementById('member-container');

    // Clear existing content
    container.innerHTML = '';

    // Iterate over each member and create member cards
    data.members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = member.name;
        card.appendChild(name);

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;
        card.appendChild(address);

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;
        card.appendChild(phone);

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = 'Visit Website';
        card.appendChild(website);

        container.appendChild(card);
    });
}

// Call the displayMembers function to populate the page
displayMembers();