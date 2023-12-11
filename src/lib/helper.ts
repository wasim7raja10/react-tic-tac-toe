export const calculateWinner = (squares: string[]): string | null => {
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
			return squares[a];
		}
	}
	return null;
};

export const calculateDraw = (squares: string[]): boolean => {
	return squares.every((square) => square !== null);
};

export const getStatus = (squares: string[], currentPlayer: string): string => {
	const winner = calculateWinner(squares);
	const isDraw = calculateDraw(squares);
	if (winner) {
		return `Winner: ${winner}`;
	} else if (isDraw) {
		return `Draw`;
	} else {
		return `Next player: ${currentPlayer}`;
	}
};
