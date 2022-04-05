const initialState = [];

const TurningPointReducer = (state = initialState, action) => {
	switch (action.type) {
		case "turn":
			return [...state, action.coords];

		default:
			return state;
	}
};

export default TurningPointReducer;
