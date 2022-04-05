import styled from "styled-components";
import { useRef } from "react";

import { useSelector } from "react-redux";

const Container = styled.div`
	background-color: black;
	height: 2%;
	width: 2%;
	border-radius: 50%;
	position: absolute;
	transform: translate(-50%, -50%);
`;

const Food = ({ food }) => {
	const foodCoords = useSelector((state) => state.foodCoords);

	const foodRef = useRef();

	food.current = foodRef.current;

	return (
		<Container
			ref={foodRef}
			style={{ top: `${foodCoords.y}%`, left: `${foodCoords.x}%` }}
		></Container>
	);
};

export default Food;
