import { Link } from "react-router-dom"
import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, List, ListItem, useDisclosure } from "@chakra-ui/react"
import CDNModal from "./CDNModal"

const NavBar = ({ methods }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<HStack
				as="nav"
				borderBottom="1px"
				borderColor="gray.200"
				id="navigation"
			>
				<Box
					backgroundColor="pink.500"
					py="2"
					px="4"
					fontSize="xl"
					color="white"
					fontWeight="black"
				>
					p5.cljs
				</Box>
				<HStack
					as={List}
					spacing="24px"
					px="4"
					color="gray.600"
				>
					<ListItem className="pt-3 px-4">
						<Link to="about">
							About
						</Link>
					</ListItem>
					<ListItem className="pt-3 px-4">
						<Link to="">
							Editor
						</Link>
					</ListItem>
					<Menu id="sketch-dropdown">
						<MenuButton className="pt-3 px-4">
							Sketch ▾
						</MenuButton>
						<MenuList className="border-neutral-200 border">
							<MenuItem className="hover:bg-neutral-100 text-sm p-1 m-0"
								onClick={() => { onOpen() }}>
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
					<ListItem className="pt-3 px-4">
						<Link to="tutorial">
							Tutorial
						</Link>
					</ListItem>
					<ListItem className="pt-3 px-4">
						<Link to="changelog">
							Changelog
						</Link>
					</ListItem>
				</HStack>
			</HStack>
			<CDNModal isOpen={isOpen} onClose={onClose} />
		</>
	)
}

export default NavBar;
