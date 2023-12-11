export type BoardState = {
	boardState: string[];
	moveLocation: MoveLocation;
};

export type MoveLocation = [number, number] | null;
