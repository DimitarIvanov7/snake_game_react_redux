const initialState = { x: 40, y: 40 };

const foodCoordsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "foodCoords":
			return action.coords;

		default:
			return state;
	}
};

export default foodCoordsReducer;
