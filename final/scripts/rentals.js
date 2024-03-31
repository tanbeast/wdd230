document.addEventListener('DOMContentLoaded', function() {
    fetch('data/base.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#rentalsTable tbody');
            data.forEach(vehicle => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${vehicle.name}</td>
                    <td>${vehicle.type}</td>
                    <td>${vehicle.price}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
