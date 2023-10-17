import React, { useEffect } from "react";
import { useState } from "react";

const Home = () => {

	const[counter, setCounter] = useState(0)
	const[stop, setStop] = useState(true)


	useEffect(()=>{
		if(stop){

			let interval = setInterval(() => {
				setCounter(counter+1)
			}, 1000 );
			
			return ()=> clearInterval(interval); 
			}

		}
		
		,[counter, stop])

	
	return (
		<div className="contenedor">
			<h1>Contador</h1>
			<div className="contador">
				<h1>{ Math.floor((counter/10000)%10) }</h1>
				<h1>{ Math.floor((counter/1000)%10) }</h1>
				<h1>{ Math.floor((counter/100)%10) }</h1>
				<h1>{ Math.floor((counter/10)%10) }</h1>
				<h1>{ Math.floor((counter/1)%10) }</h1>
			</div>
			<div className="botones">
				<button onClick= { ()=>setStop(!stop) }> {stop?'Stop':'Resume'}</button>
				<button onClick= { ()=>setCounter(counter==0) }> Restart</button>

			</div>
		</div>
	);
};

export default Home;
