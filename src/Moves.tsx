function Moves({
	onJumpTo,
	moveNumber,
}: {
	onJumpTo: (move: number) => void;
	moveNumber: number;
}) {
	return (
		<div>
			<h6 style={{ fontSize: "1rem" }}>Moves</h6>
			<ul className="list">
				{Array(moveNumber + 1)
					.fill(null)
					.map((_, move) => {
						return (
							<li key={move}>
								{move === moveNumber ? (
									<b>{`Move #${move}`}</b>
								) : (
									<button onClick={() => onJumpTo(move)}>
										{move === 0 ? "Go to game start" : `Go to move #${move}`}
									</button>
								)}
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default Moves;
