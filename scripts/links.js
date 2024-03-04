const baseURL = "https://tanbeast.github.io/wdd230/";
const linksURL = "https://tanbeast.github.io/wdd230/data/links.json";

// Function to fetch and process the JSON data
async function fetchLessonData() {
    try {
        // Fetch the JSON data from the provided URL
        const response = await fetch(linksURL);

        // Throw an error if the response status is not OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const lessonData = await response.json();

        // Call a function to create and populate the HTML section with lesson links
        createLessonSection(lessonData);
    } catch (error) {
        console.error('Error fetching lesson data:', error);
    }
}

// Function to create and populate the HTML section with lesson links
function createLessonSection(lessonData) {
    // Select the container where the section will be appended
    const container = document.getElementById('one');

    // Remove any existing content in the container
    container.innerHTML = '';

    // Create a new section element
    const section = document.createElement('section');
    section.id = 'one';
    section.classList.add('card');

    // Create a heading for the section
    const heading = document.createElement('h3');
    heading.textContent = 'Learning activities';

    // Create an unordered list to hold the links
    const ul = document.createElement('ul');

    // Loop through each lesson in the JSON data and create list items with links
    lessonData.lessons.forEach((lesson) => {
        const li = document.createElement('li');
        li.textContent = lesson.lesson + '. ';
        lesson.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            li.appendChild(a);
            if (index < lesson.links.length - 1) {
                li.appendChild(document.createTextNode(' - '));
            }
        });
        ul.appendChild(li);
    });

    // Append the heading and unordered list to the section
    section.appendChild(heading);
    section.appendChild(ul);

    // Append the section to the container
    container.appendChild(section);
}

// Call the function to fetch and process the JSON data
fetchLessonData();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);
  }
  
  getLinks();