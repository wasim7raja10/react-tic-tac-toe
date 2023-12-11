import { useEffect, useState } from "react";
import { BoardState, MoveLocation } from "./lib/types";

function History({
	onJumpTo,
	history,
}: {
	onJumpTo: (move: number) => void;
	history: BoardState[];
}) {
	const [order, setOrder] = useState<"ascending" | "descending">("ascending");
	const [currentMoveIndex, setCurrentMoveIndex] = useState(history.length - 1);

	useEffect(() => {
		setCurrentMoveIndex(history.length - 1);
	}, [history]);

	if (history[history.length - 1].moveLocation === null) {
		return <h6>GAME not started</h6>;
	}

	const toggleOrder = () => {
		setOrder(order === "ascending" ? "descending" : "ascending");
	};

	const orderedHistory =
		order === "ascending" ? history : [...history].reverse();

	const islatestMove = (moveIndex: number) => moveIndex === currentMoveIndex;

	const moveIndex = (index: number) => {
		if (order === "ascending") {
			return index;
		}
		return history.length - 1 - index;
	};

	const getIndexAndLocation = (moveLocation: MoveLocation, index: number) => {
		if (moveLocation) {
			return `#${moveIndex(index)} - (${moveLocation})`;
		}
		return `#${moveIndex(index)}`;
	};

	return (
		<div>
			<div className="flex">
				<h6 style={{ fontSize: "1rem", marginRight: "1rem" }}>History</h6>
				<button onClick={toggleOrder}>
					Sort in {order === "ascending" ? "descending" : "ascending"}
				</button>
			</div>
			<ul className="list">
				{orderedHistory.map(({ moveLocation }, index) => {
					return (
						<li key={index}>
							{islatestMove(moveIndex(index)) ? (
								<b>{`Move ${getIndexAndLocation(moveLocation, index)}`}</b>
							) : (
								<button
									onClick={() => {
										setCurrentMoveIndex(moveIndex(index));
										onJumpTo(moveIndex(index));
									}}
								>
									{moveIndex(index) === 0
										? "Go to game start"
										: `Go to move ${getIndexAndLocation(moveLocation, index)}`}
								</button>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default History;
