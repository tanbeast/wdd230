
// Function to toggle between grid and list view
function toggleView() {
    const view = document.querySelector('input[name="view"]:checked').value;
    const container = document.getElementById('member-container');
    
    if (view === 'grid') {
        container.classList.remove('list-container');
        container.classList.add('grid-container');
    } else {
        container.classList.remove('grid-container');
        container.classList.add('list-container');
    }
}

// Add event listener to toggle container
document.getElementById('toggle-container').addEventListener('change', toggleView);

