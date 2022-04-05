const initial = { x: 50, y: 50 };

const SnakePositionReducer = (state = initial, action) => {
	switch (action.type) {
		case "change":
			return {
				x: state.x + action.coords.x,
				y: state.y + action.coords.y,
			};

		case "reset":
			return initial;

		default:
			return state;
	}
};

export default SnakePositionReducer;
