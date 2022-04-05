import { combineReducers } from "redux";
import SnakeMoveReducer from "./SnakeMoveReducer";
import SnakePositionReducer from "./SnakePositionReducer";
import TurningPointReducer from "./TurningPointReducer";
import foodCoordsReducer from "./FoodCoordsReducer";

const reducers = combineReducers({
	snakeDirection: SnakeMoveReducer,
	snakePosition: SnakePositionReducer,
	TurningPoint: TurningPointReducer,
	foodCoords: foodCoordsReducer,
});

export default reducers;
