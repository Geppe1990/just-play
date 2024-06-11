import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { RootState, AppDispatch } from "../store"
import { increment, decrement, reset } from "../features/counter/counterSlice"

const CounterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 200px;
	margin: 20px auto;
`

const Button = styled.button`
	padding: 10px;
	margin: 5px;
	font-size: 16px;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	background-color: #282c34;
	color: white;
	&:hover {
		background-color: #3b4048;
	}
`

const Counter: React.FC = () => {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch<AppDispatch>()

	return (
		<CounterContainer>
			<h2>Counter: {count}</h2>
			<Button onClick={() => dispatch(increment())}>Increment</Button>
			<Button onClick={() => dispatch(decrement())}>Decrement</Button>
			<Button onClick={() => dispatch(reset())}>Reset</Button>
		</CounterContainer>
	)
}

export default Counter
