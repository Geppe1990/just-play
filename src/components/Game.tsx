import { useState } from "react"
import styled from "styled-components"

interface PlatformInterface {
	platform: {
		id: number
		image: string | null
		name: string
	}
}

export interface GameDataState {
	id: string
	name: string
	description: string
	background_image: string
	platforms: PlatformInterface[]
}

const Image = styled.img`
	width: 300px;
	height: auto;
`

const Game = () => {
	const [gameData, setGameData] = useState<GameDataState | null>(null)
	const fetchData = async (id: string) => {
		const response = await fetch(
			`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`,
			{
				method: "GET",
				headers: { Accept: "application/json" },
			}
		)
		if (!response.ok) {
			console.log("ERRORE: ", response)
		}

		return await response.json()
	}

	return (
		<div>
			<div>
				<button
					onClick={() => {
						fetchData("3498")
							.then((data) => setGameData(data))
							.catch((error) => console.log(error))
					}}
				>
					Cerca gioco
				</button>
			</div>
			<div>
				{gameData?.background_image && (
					<Image
						src={gameData?.background_image}
						alt={`${gameData?.name} main image`}
					/>
				)}
				{gameData?.name}
				{gameData?.description && (
					<div dangerouslySetInnerHTML={{ __html: gameData.description }}></div>
				)}
				{gameData?.platforms && <h2>Piattaforme</h2>}
				{gameData?.platforms.map((platform) => (
					<div>{platform.platform.name}</div>
				))}
			</div>
		</div>
	)
}

export default Game
