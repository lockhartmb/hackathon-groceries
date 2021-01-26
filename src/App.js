// import { useState } from 'react'
import data from './data/recipes.json'

const App = () => {
	// const [checkedBoxes, setCheckedBoxes] = useState([])

	const { recipes } = data
	const buttonHandler = () => {
		// 1. get all the checked boxes
		// 2. convert that node list to an array
		const checkedInputs = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))

		// 3. then convert that array into an array of the checked ids
		const checkedIds = checkedInputs.map(input => input.id)
		// 4. compare that array of ids to the full list of recipes and get all the matching recipes
		const checkedRecipes = recipes.filter(recipe => checkedIds.includes(recipe.id))
		console.log(checkedRecipes)
		// 5. set checked boxes to that subset of recipes
		// setCheckedBoxes(checkedValues)
	}
	return (
		<div className="App">
			<header className="App-header">Hackathon Groceries</header>

			<main>
				<form>
					{recipes.map(recipe => {
						const { title, id } = recipe
						console.log(recipe)
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
			</main>

			<footer>Hackathon 2021</footer>
		</div>
	)
}

export default App
