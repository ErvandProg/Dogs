import React, { useState } from 'react';

export default function Header({ dogs }) {
	const [activeBreeds, setActiveBreeds] = useState([]);
	// const [images, setImages] = useState([])

	function checkedInActive(element) {
		if (activeBreeds.find((el) => el === element)) {
			const actives = activeBreeds.filter((elem) => elem !== element);
			setActiveBreeds([...actives]);
		} else {
			setActiveBreeds([...activeBreeds, element]);
		}
	}

	function handleDoubleClick(element) {
		setActiveBreeds((unActive) => {
			if (unActive.includes(element)) {
				const actives = unActive.filter((elem) => elem !== element);
				return [...actives];
			} else {
				return [...unActive, element];
			}
		});
	}

	return (
		<header className="flex flex-col items-center justify-center w-[100%]">
			<div className="flex items-center justify-center pb-[30px] pt-[30px] border-b-2 border-solid border-black w-[100%]">
				<h1 className="flex justify-center items-center text-[40px] pb-[35px] pt-[35px]">
					<span className="flex justify-center items-center text-[40px] mr-[50px]">
						D<img width="40" height="40" src="https://img.icons8.com/ios/50/dog--v2.png" alt="dog--v2" />G
					</span>
					API
				</h1>
			</div>
			<nav className="flex items-center justify-center w-[100%] border-b-2 pb-[15px] pt-[15px] border-solid border-black text-[20px]">
				<ul className="flex justify-evenly w-full">
					{dogs.map((element, index) => (
						<li
							key={`item${index}`}
							className={
								activeBreeds.includes(element)
									? 'border border-black cursor-pointer rounded-md h-[38px] pl-[6px] pr-[6px] flex justify-center items-center'
									: 'cursor-pointer h-[38px] flex justify-center items-center pl-[7px] pr-[7px]'
							}
							onClick={() => checkedInActive(element)}
							onDoubleClick={() => handleDoubleClick(element)}
						>
							{element}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
