import React, { useState } from "react"

export interface ResultInterface {
	name: string
	id: number
}

export interface ResultsState {
	count: number
	results: ResultInterface[]
}
const SearchGame = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const fetchData = async (name: string) => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${name}`,
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

	const handleClick = () => {
		if (!search) {
			return
		}

		fetchData(search)
			.then((data) => setResults(data))
			.catch((error) => console.log(error))
	}

	const [search, setSearch] = useState("")
	const [results, setResults] = useState<ResultsState | null>(null)
	return (
		<>
			<input type="text" placeholder="Cerca gioco" onChange={handleChange} />
			<button onClick={handleClick}>Cerca</button>
			{results && (
				<ul>
					{results.results.map((result) => (
						<li key={result.name}>{result.name}</li>
					))}
				</ul>
			)}
		</>
	)
}

export default SearchGame
