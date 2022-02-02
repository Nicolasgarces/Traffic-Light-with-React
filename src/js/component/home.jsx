import React, { useState } from "react";
//create your first component
const Home = () => {
	//    variable | funcion/actualizar
	const [color, setColor] = useState("");
	/* la variable color almacena todos los estados.
	funcion setColor actualiza la informacion dentro de la variable.
	el useState tedrá el valor por defecto de cada color */

	return (
		<div>
			<div className="linea"></div>
			<div className="rectangulo">
				{/* para concatenar usamos el signo + , cuando utilizamos las llaves es para hacer o escribir algo dinámico*/}
				{/* la funcion onClick se debe poner dentro de la etiqueta que abre el div y antes del className */}
				<div
					onClick={() => setColor("red")}
					className={
						"circulo red" + (color === "red" ? " brillo" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"circulo yellow" + (color === "yellow" ? " brillo" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"circulo green" + (color === "green" ? " brillo" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
