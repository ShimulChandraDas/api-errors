//MEAL SECTIONS
const toggleSpinner = displyStyle => {
    document.getElementById('spinner').style.display = displyStyle;
}

const toggleSearchResult = displyStyle => {
    document.getElementById('meals').style.display = displyStyle;
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);

    //diplay Spinner
    toggleSpinner('block');
    toggleSearchResult('none')
    document.getElementById('search-field').value = '';
};

const loadMeals = (searchText) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(rep => rep.json())
        .then(data => displyMeals(data.meals));
};
loadMeals('fish');


const displyMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if (!meals) {
        alert('Nothing Found');
    }
    meals?.forEach(meal => {
        //console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meals.strIngredient8 ? meals.strIngredient8 : 'Cant find'}</p>
        <button onclick="loadMealDetail('${meal.strMeal}')"> See More </button>
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block');
};

const loadMealDetail = mealName => {
    console.log(mealName)
}
