import { Link } from "react-router-dom"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const NavBar = ({ methods }) => {
	return (
		<nav className="border-b border-neutral-200 mb-4 flex" id="navigation">
			<div className="bg-fuchsia-600 p-2 text-white font-black text-xl">
				p5.cljs
			</div>
			<ul className="flex align-center mx-4 text-neutral-500">
				<li className="pt-3 px-4">
					<Link to="">
						Editor
					</Link>
				</li>
				<Menu id="sketch-dropdown">
					<MenuButton as="li" className="pt-3 px-4">
						Sketch ▾
					</MenuButton>
					<MenuList className="border-neutral-200 border">
						<MenuItem className="hover:bg-neutral-100 text-sm p-1 m-0">
							Add CDN Link
						</MenuItem>
						<MenuItem className="hover:bg-neutral-100 text-sm p-1 m-0 dropdown-run"
							onClick={() => { methods.run() }}>
							Run <span className="ml-2 text-xs">Alt+Enter</span>
						</MenuItem>
						<MenuItem className="hover:bg-neutral-100 text-sm p-1 m-0 dropdown-stop"
							onClick={() => { methods.stop() }}>
							Stop <span className="ml-2 text-xs">Alt+Shift+Enter</span>
						</MenuItem>
					</MenuList>
				</Menu>
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
				<li className="pt-3 px-4">
					<Link to="changelog">
						Changelog
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar;
