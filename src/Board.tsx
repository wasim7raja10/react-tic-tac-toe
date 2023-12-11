import { calculateWinner, getStatus } from "./lib/helper";
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

	const status = getStatus(currentBoardState, currentPlayer);
	const winningSquares = calculateWinner(currentBoardState)?.line;

	return (
		<>
			<h6 className="status">{status}</h6>
			<div className="board">
				{currentBoardState.map((square: string, index: number) => (
					<button
						className={
							"square" + (winningSquares?.includes(index) ? " win" : "")
						}
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
