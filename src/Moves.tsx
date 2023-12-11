import { BoardState } from "./lib/types";

function History({
	onJumpTo,
	history,
}: {
	onJumpTo: (move: number) => void;
	history: BoardState[];
}) {
	if (history[history.length - 1].moveLocation === null) {
		return <h6>GAME not started</h6>;
	}
	return (
		<div>
			<div>
				<h6 style={{ fontSize: "1rem" }}>History</h6>
			</div>
			<ul className="list">
				{history.map(({ moveLocation }, move) => {
					return (
						<li key={move}>
							{move === history.length - 1 ? (
								<b>{`Move #${move} - (${moveLocation})`}</b>
							) : (
								<button onClick={() => onJumpTo(move)}>
									{move === 0
										? "Go to game start"
										: `Go to move #${move} - (${moveLocation})`}
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
