import { useState } from 'react'
import data from './data/recipes.json'

const App = () => {
	const [ingredients, setIngredients] = useState([])
	const { recipes } = data

	const getIngredients = () => {
		// 1. get all the checked boxes
		// 2. convert that node list to an array
		// 3. then convert that array into an array of the checked ids
		const checkedIds = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(
			input => input.id
		)
		// 4. compare that array of ids to the full list of recipes and get all the matching recipes
		const checkedRecipes = recipes.filter(recipe => checkedIds.includes(recipe.id))
		const allIngredients = checkedRecipes.map(recipe => recipe.ingredients).flat()
		console.log(allIngredients)

		setIngredients(allIngredients)
	}

	const buttonHandler = () => {
		getIngredients()
	}

	return (
		<div className="App">
			<header className="App-header">Hackathon Groceries</header>

			<main>
				<section>
					<form>
						{recipes.map(recipe => {
							const { title, id } = recipe
							return (
								<div key={id}>
									<label htmlFor={title}>{title}</label>
									<input type="checkbox" id={id} name={title} value={id} />
								</div>
							)
						})}
						<button type="button" onClick={buttonHandler}>
							Get Grocery List
						</button>
					</form>
				</section>
				<section>
					<ul>
						{ingredients &&
							ingredients.length > 0 &&
							ingredients.map((ingredient, index) => {
								return <li key={index}>{`${ingredient.quantity} ${ingredient.name}`}</li>
							})}
					</ul>
				</section>
			</main>

			<footer>Hackathon 2021</footer>
		</div>
	)
}

export default App
