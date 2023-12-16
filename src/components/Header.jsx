import React, { useState } from 'react';

export default function Header({ dogs }) {
	const [activeBreeds, setActiveBreeds] = useState([]);
	function checkedInActive(element) {
		if (activeBreeds.find(el => el === element)) {
			const actives = activeBreeds.filter((elem, index) => elem !== element);
			setActiveBreeds([...activeBreeds, actives]);
		} else {
			const actives = dogs.filter((e, i) => e === element)[0];
			setActiveBreeds([...activeBreeds, actives]);
		}
	}

	function getId(element) {
		return activeBreeds.find((el) => el === element)
	}

	return (
		<header className="flex flex-col items-center justify-center w-[100%]">
			<div className="flex items-center justify-center pb-[35px] pt-[35px] border-b-2 border-solid border-black w-[100%]">
				<h1 className="flex justify-center items-center text-[40px]">
					<span className="flex justify-center items-center text-[40px] mr-[50px]">D<img width="40" height="40" src="https://img.icons8.com/ios/50/dog--v2.png" alt="dog--v2" />G</span>
					API
				</h1>
			</div>
			<nav className="flex items-center justify-center w-[100%] border-b-2 pb-[15px] pt-[15px] border-solid border-black text-[20px]">
				<ul className='flex justify-evenly w-full'>
					{dogs.map((element, index) => {
						return (
							<li
								key={`item${index}`}
								className={getId(element) ? "border border-black cursor-pointer rounded-md h-[38px] pl-[6px] pr-[6px] flex justify-center items-center" : "cursor-pointer h-[38px] flex justify-center items-center pl-[7px] pr-[7px]"}
								onClick={() => checkedInActive(element)}
							>
								{element}
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}