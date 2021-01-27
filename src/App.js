/** @jsxImportSource @emotion/react */
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import * as styles from './styles'

const App = () => {
	return (
		<div css={styles.body}>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
