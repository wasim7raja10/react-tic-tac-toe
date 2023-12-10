function Moves({
	onJumpTo,
	moveNumber,
}: {
	onJumpTo: (move: number) => void;
	moveNumber: number;
}) {
	return (
		<div>
			<h6>Moves</h6>
			<ul className="list">
				{Array(moveNumber + 1)
					.fill(null)
					.map((_, move) => {
						return (
							<li key={move}>
								<button onClick={() => onJumpTo(move)}>
									{move === 0 ? "Go to game start" : `Go to move #${move}`}
								</button>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default Moves;
