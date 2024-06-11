import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
	background-color: #282c34;
	padding: 20px;
	color: white;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<h1>JustPlay</h1>
		</HeaderContainer>
	)
}

export default Header
