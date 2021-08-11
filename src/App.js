import "./App.css";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className='App'>
			<header>
				<h1>To Do List</h1>
			</header>

			<Form />
			<TodoList />
		</div>
	);
}

export default App;
