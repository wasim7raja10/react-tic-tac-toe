import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Moves from "./Moves";

function App() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [moveNumber, setMoveNumber] = useState(0);
	const currentBoardState = history[history.length - 1];

	function handlePlay(nextBoardState: string[]) {
		setHistory([...history, nextBoardState]);
    setMoveNumber(moveNumber + 1);
	}

  function handleResetGame() {
    setHistory([Array(9).fill(null)]);
    setMoveNumber(0);
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
          <button onClick={handleResetGame} className="reset">RESET GAME</button>
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
