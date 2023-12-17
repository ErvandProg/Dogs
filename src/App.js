import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Photos from "./components/Photos.jsx";

export default function App() {
	let [dogs, setDogs] = useState([]);
	let names = randomBreeds(5, dogs);

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
			if (randomNums.find((el) => el === rand) === undefined) {
				randomNums.push(rand);
			}
		}

		newArray = randomNums.map(index => {
			if (array[index]) {
				const word = array[index];
				return word[0].toUpperCase() + word.slice(1);
			}
			return "";
		});

		return newArray;
	};

	return (
		<>
			<Header dogs={names} />
			<Photos dogs={names} />
		</>
	);
}