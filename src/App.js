import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";

export default function App() {
	let [dogs, setDogs] = useState([]);

	useEffect(() => {
		fetch(`https://dog.ceo/api/breeds/list/all`).then(res => {
			res.json()
		}).then(data => {
			let breeds = Object.keys(data.message);
			setDogs(breeds)
		}).catch(err => { console.log(err); });
	}, [])

	function randomBreeds(quantity, array) {
		let randomNums = [];
		let newArray = [];
		for (let index = 0; index < quantity; index++) {
			let rand = Math.floor(Math.random() * array.length);
			// if (randomNums.indexOf(rand) === -1) {
			randomNums.push(rand);
			// } else {
			// index--
			// }
		}

		for (let index = 0; index < randomNums.length; index++) {
			newArray.push(array[randomNums[index]]);
		}

		return newArray;
	}

	let names = randomBreeds(10, dogs)

	return (
		<>
			<Header dogs={names} />
		</>
	);
}

