export const turn = (coords) => {
	return (dispatch) => {
		dispatch({
			type: "turn",
			coords: coords,
		});
	};
};

export const foodCoords = (coords) => {
	return (dispatch) => {
		dispatch({
			type: "foodCoords",
			coords: coords,
		});
	};
};

export const reset = () => {
	return (dispatch) => {
		dispatch({
			type: "reset",
		});
	};
};

export const changePos = (coords) => {
	return (dispatch) => {
		dispatch({
			type: "change",
			coords: coords,
		});
	};
};

export const moveLeft = () => {
	return (dispatch) => {
		dispatch({
			type: "left",
		});
	};
};

export const moveRight = () => {
	return (dispatch) => {
		dispatch({
			type: "right",
		});
	};
};

export const moveUp = () => {
	return (dispatch) => {
		dispatch({
			type: "up",
		});
	};
};

export const moveDown = () => {
	return (dispatch) => {
		dispatch({
			type: "down",
		});
	};
};

export const stop = () => {
	return (dispatch) => {
		dispatch({
			type: "stop",
		});
	};
};
