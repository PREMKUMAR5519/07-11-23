async function fetchCatImages() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const container = document.getElementById('cat-images-container');
        data.forEach(cat => {
            const imageElement = document.createElement('img');
            imageElement.src = cat.url;
            imageElement.alt = 'Cat Image';
            imageElement.classList.add('cat-image');
            container.appendChild(imageElement);
        });
    } catch (error) {
        console.error('Error fetching cat images:', error.message);
    }
}
document.addEventListener('DOMContentLoaded', fetchCatImages);