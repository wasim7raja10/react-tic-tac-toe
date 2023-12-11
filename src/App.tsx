import { useState } from "react";

import Board from "./Board";
import History from "./Moves";
import "./App.css";

function App() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [moveNumber, setMoveNumber] = useState(0);

	const currentBoardState = history[moveNumber];
	const currentPlayer = moveNumber % 2 === 0 ? "X" : "O";

	function handlePlay(nextBoardState: string[]) {
		const newHistory = history.slice(0, moveNumber + 1);
		newHistory.push(nextBoardState);
		setHistory(newHistory);
		setMoveNumber(moveNumber + 1);
	}

	function handleResetGame() {
		setHistory([Array(9).fill(null)]);
		setMoveNumber(0);
	}

	function handleJumpTo(move: number) {
		setMoveNumber(move);
	}

	return (
		<>
			<div className="flex gap">
				{/* Game */}
				<div>
					<Board
						currentBoardState={currentBoardState}
						onPlay={handlePlay}
						currentPlayer={currentPlayer}
					/>
					<button onClick={handleResetGame} className="reset">
						RESET GAME
					</button>
				</div>

				{/* Move */}
				<div>
					<History onJumpTo={handleJumpTo} moveNumber={moveNumber} />
				</div>
			</div>
		</>
	);
}

export default App;
