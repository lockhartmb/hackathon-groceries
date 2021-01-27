/** @jsxImportSource @emotion/react */
import * as styles from './styles'

const Header = () => {
	return (
		<header css={styles.header}>
			<h1 css={styles.title}>
				<a href="/" css={styles.titleLink}>
					Get Your Groceries
				</a>
			</h1>
		</header>
	)
}

export default Header
