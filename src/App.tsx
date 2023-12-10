import "./App.css";
import Board from "./Board";
import Moves from "./Moves";

function App() {
	return (
		<>
			<div className="flex gap">
				{/* Game */}
				<div>
					<Board />
				</div>

				{/* Move */}
				<div>
					<Moves />
				</div>
			</div>
		</>
	);
}

export default App;
