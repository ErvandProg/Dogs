import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";

export default function App() {
	let [dogs, setDogs] = useState([]);
	let names = randomBreeds(10, dogs);

	useEffect(() => {
		fetch(`https://dog.ceo/api/breeds/list/all`).then(res => {
			return res.json()
		}).then(data => {
			let breeds = Object.keys(data.message);
			setDogs(breeds)
		});
	}, []);

	function randomBreeds(quantity, array) {
		let randomNums = [];
		let newArray = [];

		for (let index = 0; index < quantity; index++) {
			let rand = Math.floor(Math.random() * array.length);
			randomNums.push(rand);
		}

		for (let index = 0; index < randomNums.length; index++) {
			newArray.push(array[randomNums[index]]);
		}

		return newArray;
	};

	return (
		<>
			<Header dogs={names} />
		</>
	);
}