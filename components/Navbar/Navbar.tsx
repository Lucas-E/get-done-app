import React from "react";

const Navbar = () => {
	return (
		<>
			<nav className="w-full border">
				<div className="flex flex-row">
					<ul className="flex flex-row justify-between w-1/2 p-4">
						<li className="h-max">Home</li>
                        <li className="h-max">Login</li>
                        <li className="h-max">About</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
