import { calculateWinner } from "./lib/helper";

function Board({
	currentBoardState,
	onPlay,
	currentMoveNumber,
}: {
	currentBoardState: string[];
	onPlay: (nextBoardState: string[]) => void;
	currentMoveNumber: number;
}) {
	function handleClick(index: number) {
		if (currentBoardState[index] || calculateWinner(currentBoardState)) {
			return;
		}
		const nextBoardState = [...currentBoardState];
		nextBoardState[index] = currentMoveNumber % 2 === 0 ? "X" : "O";
		onPlay(nextBoardState);
	}

	const winner = calculateWinner(currentBoardState);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${currentMoveNumber % 2 === 0 ? "X" : "O"}`;

	return (
		<>
			<h6 className="status">{status}</h6>
			<div className="board">
				{currentBoardState.map((square: string, index: number) => (
					<button
						className="square"
						onClick={() => handleClick(index)}
						key={index}
					>
						{square}
					</button>
				))}
			</div>
		</>
	);
}

export default Board;
