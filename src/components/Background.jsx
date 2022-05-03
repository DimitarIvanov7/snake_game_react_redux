import styled from "styled-components";
import Food from "./Food";
import Snake from "./Snake";

import { useRef } from "react";

const Container = styled.div`
	width: calc(45% - 4px);

	aspect-ratio: 1/1;

	border: 2px solid black;
	position: relative;

	margin: auto;
`;

const Background = () => {
	const foodRef = useRef();

	return (
		<Container>
			<Snake food={foodRef && foodRef.current} />
			<Food food={foodRef} />
		</Container>
	);
};

export default Background;
