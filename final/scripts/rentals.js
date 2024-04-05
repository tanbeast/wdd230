document.addEventListener("DOMContentLoaded", function() {
    fetch("data/base.json")
        .then(response => response.json())
        .then(data => {
            const rentalTable = document.getElementById("rental-body");
            data.rentals.forEach(rental => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${rental.type}</td>
                    <td>${rental.max_persons}</td>
                    <td>$${rental.half_day_price}</td>
                    <td>$${rental.full_day_price}</td>
                    <td><img src="images/${rental.image}" alt="${rental.type}" width="100"></td>
                `;
                rentalTable.appendChild(row);
            });
        })
        .catch(error => console.log(error));
});
