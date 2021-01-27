/** @jsxImportSource @emotion/react */
import data from '../../data/recipes.json'
import { useState } from 'react'
import * as styles from './styles'

const Main = () => {
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
		// 5. from all the recipes make a master list of all ingredients
		const allIngredients = checkedRecipes.map(recipe => recipe.ingredients).flat()

		// 6. merge duplicate ingredients and add their quantities
		let counts = allIngredients.reduce((prev, curr) => {
			let count = prev.get(curr.name) || 0
			prev.set(curr.name, curr.quantity + count, curr.units)
			console.log(prev)
			return prev
		}, new Map())
		let combinedIngredients = [...counts].map(([name, quantity, units]) => {
			return { name, quantity, units }
		})

		setIngredients(combinedIngredients)
	}

	const buttonHandler = () => {
		getIngredients()
	}

	return (
		<main css={styles.main}>
			<section css={styles.formSection}>
				<form css={styles.form}>
					{recipes.map(recipe => {
						const { title, id } = recipe
						return (
							<div key={id} css={styles.recipeCard}>
								<input type="checkbox" id={id} name={title} value={id} />
								<label htmlFor={title}>{title}</label>
							</div>
						)
					})}
					<button type="button" onClick={buttonHandler} css={styles.button}>
						Get Grocery List
					</button>
				</form>
			</section>
			<section>
				<ul>
					{ingredients &&
						ingredients.length > 0 &&
						ingredients.map(({ name, quantity, units }, index) => {
							const unit = units === 'each' ? '' : quantity > 1 ? `${units}s` : `${units}`
							const ingredientListItem = `${quantity} ${unit} ${name}`

							return <li key={index}>{ingredientListItem}</li>
						})}
				</ul>
			</section>
		</main>
	)
}

export default Main
