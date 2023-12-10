import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Moves from "./Moves";

function App() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [moveNumber, setMoveNumber] = useState(0);
	const currentBoardState = history[moveNumber];

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
						currentMoveNumber={moveNumber}
					/>
					<button onClick={handleResetGame} className="reset">
						RESET GAME
					</button>
				</div>

				{/* Move */}
				<div>
					<Moves onJumpTo={handleJumpTo} moveNumber={moveNumber} />
				</div>
			</div>
		</>
	);
}

export default App;
