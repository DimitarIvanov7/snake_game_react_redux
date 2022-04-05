import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useState, useEffect, useRef } from "react";
import useInterval from "./customHooks/useInterval";

import { v4 as uuidv4 } from "uuid";
import checkCollision from "./customHooks/collisionDetection";

const Container = styled.div`
	width: 1%;
	height: 1%;
	background-color: grey;
	transform: translate(-50%, -50%);
	position: absolute;
`;

const SnakeTail = styled.div`
	background-color: black;
	width: 1%;
	height: 1%;
	transform: translate(-50%, -50%);
	position: absolute;
`;

const Snake = ({ food }) => {
	const dispatch = useDispatch();
	const { changePos, stop, foodCoords, reset } = bindActionCreators(
		actionCreators,
		dispatch
	);

	const snakeDir = useSelector((state) => state.snakeDirection);

	const position = useSelector((state) => state.snakePosition);

	const prevPos = useRef([]);

	prevPos.current = [];

	const addToRefs = (el) => {
		if (el && !prevPos.current.includes(el)) prevPos.current.push(el);
	};

	const initialSnake = [
		{ y: 50, x: 51 },
		{ y: 50, x: 50 },
		{ y: 50, x: 49 },
	];

	const [tailPosition, setTailPosition] = useState(initialSnake);

	useEffect(() => {
		if (
			position.x === 0 ||
			position.x === 100 ||
			position.y === 100 ||
			position.y === 0
		) {
			stop();
			setTailPosition(initialSnake);
			reset();
			return;
		}

		if (food && checkCollision(food, prevPos.current[0])) {
			setTailPosition([position, ...tailPosition]);
			createFoodCoords();
		} else {
			setTailPosition(
				prevPos.current.map((tail, i) => {
					if (i === 0) return position;
					else
						return {
							y: parseInt(prevPos.current[i - 1].style.top.slice(0, -1)),
							x: parseInt(prevPos.current[i - 1].style.left.slice(0, -1)),
						};
				})
			);
		}

		if (checkTailCoords()) {
			stop();
			setTailPosition(initialSnake);
			reset();
			return;
		}
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

	const createFoodCoords = () => {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		foodCoords({ x: getRandomInt(100), y: getRandomInt(100) });
	};

	const checkTailCoords = () => {
		const [, ...rest] = tailPosition;
		const intersection = rest.find((element) => {
			if (element.x === position.x && element.y === position.y) {
				return true;
			}
		});

		return intersection;
	};

	return (
		<>
			<Container
				className="snake"
				style={{ top: `${position.y}%`, left: `${position.x}%` }}
			/>{" "}
			{tailPosition.map((pos) => (
				<SnakeTail
					ref={addToRefs}
					key={uuidv4()}
					className="tail"
					style={{
						top: `${pos.y}%`,
						left: `${pos.x}%`,
						background: pos.style && pos.style,
					}}
				/>
			))}
			{/* <button onClick={() => changePos({ x: 40, y: 40 })}>Change Dir</button> */}
			<p>Score: {tailPosition.length - 3}</p>
		</>
	);
};

export default Snake;
