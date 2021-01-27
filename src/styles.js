import { css } from '@emotion/react'
import COLORS from './styles/vars'

export const body = css`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: ${COLORS.purple.light};

	main {
		flex-grow: 2;
	}
`
