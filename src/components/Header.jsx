import React from 'react'

export default function Header() {
	return (
		<header className="flex flex-col items-center justify-center w-[100%]">
			<div className="flex items-center justify-center pb-[35px] pt-[35px] border-b-2 border-solid border-black w-[100%]">
				<h1 className="flex justify-center items-center text-[40px]">
					<span className="flex justify-center items-center text-[40px] mr-[50px]">D<img width="40" height="40" src="https://img.icons8.com/ios/50/dog--v2.png" alt="dog--v2" />G</span>
					API
				</h1>
			</div>
			<nav className="flex items-center justify-center w-[100%] border-b-2 pb-[15px] pt-[15px] border-solid border-black text-[20px]">

			</nav>
		</header>
	)
}
