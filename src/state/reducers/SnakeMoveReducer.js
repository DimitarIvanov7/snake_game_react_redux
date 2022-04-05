const initialState = "stop";

const SnakeMoveReducer = (state = initialState, action) => {
	switch (action.type) {
		case "up":
			return "up";

		case "down":
			return "down";

		case "left":
			return "left";

		case "right":
			return "right";

		case "stop":
			return false;

		default:
			return state;
	}
};

export default SnakeMoveReducer;
