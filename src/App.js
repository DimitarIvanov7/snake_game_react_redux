import Background from "./components/Background";
import { useState, useRef } from "react";
import useInterval from "./components/customHooks/useInterval";
import checkCollision from "./components/customHooks/collisionDetection";
import useEventListener from "./components/customHooks/useEventListener";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
	const snakeDir = useSelector((state) => state.snakeDirection);
	const snakePos = useSelector((state) => state.snakePosition);
	const turningPoints = useSelector((state) => state.TurningPoint);

	const dispatch = useDispatch();
	const { moveDown, moveLeft, moveRight, moveUp, stop, turn, foodCoords } =
		bindActionCreators(actionCreators, dispatch);

	const StartMoving = () => {
		moveLeft();
		createFoodCoords();
	};

	const handleBtnPress = (e) => {
		// console.log(turningPoints);
		switch (e.key) {
			case "w":
				snakeDir !== "down" && moveUp();
				turn(snakePos);
				break;
			case "s":
				snakeDir !== "up" && moveDown();
				turn(snakePos);
				break;

			case "a":
				snakeDir !== "right" && moveLeft();
				turn(snakePos);
				break;

			case "d":
				snakeDir !== "left" && moveRight();
				turn(snakePos);
				break;

			case " ":
				stop();
				break;

			case "Enter":
				StartMoving();
				break;

			default:
				break;
		}
	};

	const createFoodCoords = () => {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		foodCoords({ x: getRandomInt(100), y: getRandomInt(100) });
	};

	useEventListener("keydown", handleBtnPress);

	return <Background></Background>;
}

export default App;
