import React from "react"
import styled from "styled-components"
import { Provider } from "react-redux"
import { store } from "./store"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Counter from "./components/Counter"
// import Dummy from "./components/Dummy.tsx"
import Game from "./components/Game.tsx"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const MainContent = styled.main`
	flex: 1;
	padding: 20px;
`

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Container>
				<Header />
				<MainContent>
					<Game />
					{/*<Counter />*/}
				</MainContent>
				<Footer />
			</Container>
		</Provider>
	)
}

export default App
