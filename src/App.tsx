import React from "react"
import styled from "styled-components"
import { Provider } from "react-redux"
import { store } from "./store"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Counter from "./components/Counter"

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
					<h1>Welcome to My React App</h1>
					<p>
						This is an example of a React application using Vite, Redux, Styled
						Components, and TypeScript.
					</p>
					<Counter />
				</MainContent>
				<Footer />
			</Container>
		</Provider>
	)
}

export default App
