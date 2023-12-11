import { calculateWinner } from "./lib/helper";
import { BoardState, MoveLocation } from "./lib/types";

function Board({
	currentBoardState,
	onPlay,
	currentPlayer,
}: {
	currentBoardState: string[];
	onPlay: (nextBoardState: BoardState) => void;
	currentPlayer: string;
}) {
	function handleClick(index: number, moveLocation: MoveLocation) {
		if (currentBoardState[index] || calculateWinner(currentBoardState)) {
			return;
		}
		const nextBoardState: BoardState = {
			boardState: [...currentBoardState],
			moveLocation,
		};
		nextBoardState.boardState[index] = currentPlayer;
		onPlay(nextBoardState);
	}

	const winner = calculateWinner(currentBoardState);
	const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

	return (
		<>
			<h6 className="status">{status}</h6>
			<div className="board">
				{currentBoardState.map((square: string, index: number) => (
					<button
						className="square"
						onClick={() =>
							handleClick(index, [Math.floor(index / 3) + 1, (index % 3) + 1])
						}
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
