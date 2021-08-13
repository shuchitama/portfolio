import React, { useState } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	// State
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Functions
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	return (
		<div className='App'>
			<header>
				<h1>To Do List</h1>
			</header>

			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<TodoList todos={todos} setTodos={setTodos} status={status} />
			{inputText}
		</div>
	);
}

export default App;
