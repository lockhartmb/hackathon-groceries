import { css } from '@emotion/react'
import COLORS from '../../styles/vars'

export const main = css`
	section {
		padding: 30px 0;
	}
`

export const form = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const recipeCard = css`
	width: 200px;
	min-height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 15px;
	border: 3px solid black;
	background: white;
	padding: 10px;
	margin-bottom: 10px;
	position: relative;

	label {
		padding-left: 20px;
	}

	input {
		opacity: 0;
		z-index: 100;
	}

	label::before {
		content: '';
		display: block;
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
		height: 20px;
		width: 20px;
		border: 3px solid black;
	}

	input[type='checkbox']:checked ~ label::before {
		background-color: black;
	}
`

export const button = css`
	padding: 25px 60px;
	background-color: ${COLORS.purple.medium};
	border-radius: 50px;
	border: none;
	color: white;
	text-transform: uppercase;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	transition: background-color 0.5s ease-in-out;

	&:hover {
		background-color: ${COLORS.purple.dark};
	}
`

export const listContainer = css`
	border: 3px solid black;
	width: 200px;
	border-radius: 15px;
	margin: 0 auto;
	overflow: hidden;
`

export const subtitle = css`
	text-align: center;
	border-bottom: 3px solid black;
	padding: 20px 0;
	margin-top: 0;
	overflow: hidden;
	background-color: white;
`

export const list = css`
	padding: 20px 40px;
	margin: 0;
`

export const listItem = css`
	padding-bottom: 8px;
	list-style-type: square;
`
