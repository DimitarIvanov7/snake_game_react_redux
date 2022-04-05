import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useState, useEffect } from "react";

import useInterval from "./customHooks/useInterval";

const Container = styled.div`
	width: 5%;
	height: 5%;
	background-color: grey;
	transform: translate(-50%, -50%);
	position: absolute;
`;

const SnakeTail = styled.div`
	background-color: black;
	width: 5%;
	height: 5%;
	transform: translate(-50%, -50%);
	position: absolute;
`;

const Snake = () => {
	const dispatch = useDispatch();
	const { changePos, moveDown, moveLeft, moveRight, moveUp, stop, turn } =
		bindActionCreators(actionCreators, dispatch);

	const snakeDir = useSelector((state) => state.snakeDirection);

	const position = useSelector((state) => state.snakePosition);

	const turningPoints = useSelector((state) => state.TurningPoint);

	const [tailPosition, setTailPosition] = useState({
		y: position.y,
		x: position.x - 5,
	});

	useEffect(() => {
		if (snakeDir === "up")
			setTailPosition({ y: position.y + 5, x: position.x });

		if (snakeDir === "down")
			setTailPosition({ y: position.y - 5, x: position.x });

		if (snakeDir === "left")
			setTailPosition({ y: position.y, x: position.x + 5 });

		if (snakeDir === "right")
			setTailPosition({ y: position.y, x: position.x - 5 });
		// setTailPosition({ y: position.y, x: position.x - 5 });w
	}, [position]);

	const snakeMove = (xDirection, yDirection) => {
		changePos({ x: xDirection, y: yDirection });
	};

	useInterval(
		() => {
			switch (snakeDir) {
				case "up":
					snakeMove(0, -1);
					break;
				case "down":
					snakeMove(0, 1);
					break;
				case "left":
					snakeMove(-1, 0);
					break;

				case "right":
					snakeMove(1, 0);
					break;

				default:
					break;
			}
		},
		snakeDir ? 50 : null
	);

	return (
		<>
			<Container
				className="snake"
				style={{ top: `${position.y}%`, left: `${position.x}%` }}
			/>{" "}
			<SnakeTail
				className="tail"
				style={{
					top: `${tailPosition.y}%`,
					left: `${tailPosition.x}%`,
				}}
			/>
			<button onClick={() => changePos({ x: 40, y: 40 })}>Change Dir</button>
		</>
	);
};

export default Snake;
