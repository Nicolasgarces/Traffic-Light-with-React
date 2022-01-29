import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color1, setColor1] = useState("");
	const [color2, setColor2] = useState("");
	const [color3, setColor3] = useState("btn-secondary");
	function cambiarColor1() {
		color1 === "" ? setColor1("0 0 50px white") : setColor1("");
	}

	function cambiarColor2() {
		color2 === "" ? setColor2("0 0 50px white") : setColor2("");
	}

	function cambiarColor3() {
		color3 === "" ? setColor3("0 0 50px white") : setColor3("");
	}

	return (
		<div className="general">
			<div className="palo"></div>
			<div className="semaforo">
				<button
					className="btn btn-danger"
					style={{ boxShadow: color1 }}
					onClick={cambiarColor1}>
					<i className={"bi bi-x-lg equis "}></i>
				</button>
				<button
					className="btn2 btn-warning"
					style={{ boxShadow: color2 }}
					onClick={cambiarColor2}>
					<i className={"bi bi-x-lg equis2 "}></i>
				</button>
				<button
					className="btn3 btn-success"
					style={{ boxShadow: color3 }}
					onClick={cambiarColor3}>
					<i className={"bi bi-arrow-down flecha"}></i>
				</button>
			</div>
		</div>
	);
};

export default Home;
