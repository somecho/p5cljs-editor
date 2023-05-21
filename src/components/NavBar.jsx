import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className="border-b border-neutral-200 mb-4 flex">
			<div className="bg-fuchsia-600 p-2 text-white font-black text-xl">
				p5.cljs
			</div>
			<ul className="flex align-center mx-4 text-neutral-500">
				<li className="pt-3 px-4">
					<Link to="">
						Editor
					</Link>
				</li>
				<li className="pt-3 px-4">
					<Link to="about">
						About
					</Link>
				</li>
				<li className="pt-3 px-4">
					<Link to="tutorial">
						Tutorial
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar;
