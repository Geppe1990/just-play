import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
	background-color: #282c34;
	padding: 10px;
	color: white;
	text-align: center;
`

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<p>© 2024 My React App. All rights reserved.</p>
		</FooterContainer>
	)
}

export default Footer
