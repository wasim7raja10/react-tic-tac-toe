export const calculateWinner = (
	squares: string[]
): { player: string; line: number[] } | null => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return { player: squares[a], line: lines[i] };
		}
	}
	return null;
};

export const calculateDraw = (squares: string[]): boolean => {
	return squares.every((square) => square !== null);
};

export const getStatus = (squares: string[], currentPlayer: string): string => {
	const winner = calculateWinner(squares)?.player;
	const isDraw = calculateDraw(squares);
	if (winner) {
		return `Winner: ${winner}`;
	} else if (isDraw) {
		return `Draw`;
	} else {
		return `Next player: ${currentPlayer}`;
	}
};
