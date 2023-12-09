async function fetchCocktails() {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const container = document.getElementById('cocktail-cards-container');
        data.drinks.forEach(cocktail => {
            const card = document.createElement('div');
            card.classList.add('cocktail-card');

            const image = document.createElement('img');
            image.src = cocktail.strDrinkThumb;
            image.alt = cocktail.strDrink;
            image.classList.add('cocktail-image');

            const title = document.createElement('h3');
            title.textContent = cocktail.strDrink;

            const instructions = document.createElement('p');
            instructions.textContent = cocktail.strInstructions;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(instructions);

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching cocktails:', error.message);
    }
}
document.addEventListener('DOMContentLoaded', fetchCocktails);