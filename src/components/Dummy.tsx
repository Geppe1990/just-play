import React, { useEffect, useState } from "react"

interface DataType {
	userId: number
	id: number
	title: string
	body: string
}

const Dummy: React.FC = () => {
	const [data, setData] = useState<DataType[] | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const response = await fetch(process.env.REACT_APP_DUMMY_API_URL!)
				const response = await fetch(import.meta.env.VITE_DUMMY_API_URL)
				if (!response.ok) {
					throw new Error("Network response was not ok")
				}
				console.log("RESPONSE: ", response)
				const data = await response.json()
				setData(data)
				setLoading(false)
			} catch (error) {
				setError(error as Error)
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h1>Fetched Data</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

export default Dummy
