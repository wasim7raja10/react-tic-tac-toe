import { useEffect, useState } from "react";
import { BoardState } from "./lib/types";

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

	const islatestMove = (moveIndex: number) => {
		console.log(moveIndex, currentMoveIndex);
		return moveIndex === currentMoveIndex;
	};

	const moveIndex = (index: number) => {
		if (order === "ascending") {
			return index;
		}
		return history.length - 1 - index;
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
						<li key={moveIndex(index)}>
							{islatestMove(moveIndex(index)) ? (
								<b>{`Move #${moveIndex(index)} - (${moveLocation})`}</b>
							) : (
								<button
									onClick={() => {
										setCurrentMoveIndex(moveIndex(index));
										onJumpTo(moveIndex(index));
									}}
								>
									{moveIndex(index) === 0
										? "Go to game start"
										: `Go to move #${moveIndex(index)} - (${moveLocation})`}
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
