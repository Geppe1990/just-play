import React, { useEffect, useState } from "react"

interface DataType {
	userId: number
	id: number
	title: string
	body: string
}

const fetchData = async (): Promise<DataType[]> => {
	const response = await fetch(import.meta.env.VITE_DUMMY_API_URL)
	if (!response.ok) {
		throw new Error("Network response was not ok")
	}

	return await response.json()
}

const DummyFetchComponent: React.FC = () => {
	const [data, setData] = useState<DataType[] | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		setLoading(true)
		setError(null)

		fetchData()
			.then((data) => setData(data))
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h1>Fetched Data</h1>
			{/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
			{data?.map((elm) => <div key={elm.title}>{elm.title}</div>)}
		</div>
	)
}

export default DummyFetchComponent
