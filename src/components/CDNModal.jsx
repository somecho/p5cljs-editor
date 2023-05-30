import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Flex,
	Button,
	Input,
	Text,
	Spacer
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { encode, decode } from "../lib/compression"
import { useSearchParams } from 'react-router-dom'

const CDNModal = ({ isOpen, onClose }) => {
	const [cdnLinks, setCdnLinks] = useState([])
	const [userInput, setUserInput] = useState("")
	const [urlParams, setUrlParams] = useSearchParams();

	useEffect(() => {
		let cdns = []
		for (const param of urlParams.entries()) {
			if (param[0] == "cdn") {
				cdns = [...cdns, decode(param[1])]
			}
		}
		setCdnLinks(cdns)
	}, [])

	useEffect(() => {
		const cdnContainer = document.getElementById("cdn-container")
		while (cdnContainer.firstChild) {
			cdnContainer.removeChild(cdnContainer.lastChild)
		}
		cdnLinks.forEach(link => {
			const script = document.createElement("script")
			script.src = link
			cdnContainer.appendChild(script)
		})

		const params = {}
		for (const param of urlParams.entries()) {
			params[param[0]] = param[1]
		}
		params["cdn"] = cdnLinks.map(link => encode(link))
		setUrlParams(params)
	}, [cdnLinks])

	function onAdd() {
		setCdnLinks([...cdnLinks, userInput])
		setUserInput("")
	}

	function onDelete(i) {
		setCdnLinks(cdnLinks.filter((_, j) => i != j))
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="2xl">
			<ModalOverlay>
				<ModalContent>
					<ModalHeader>Add CDN</ModalHeader>
					<ModalBody>
						{cdnLinks.map((cdnLink, i) => (
							<Flex key={cdnLink} align="center">
								<Text>
									{cdnLink}
								</Text>
								<Spacer />
								<Button
									variant='ghost'
									onClick={() => { onDelete(i) }}
								>×</Button>
							</Flex>)
						)}
						<Input my="2" value={userInput} onChange={e => setUserInput(e.target.value)} />
					</ModalBody>
					<ModalFooter>
						<Button onClick={() => { onClose() }}>
							close
						</Button>
						<Button
							backgroundColor="pink.500"
							color="white"
							ml="4"
							onClick={() => { onAdd() }}
						>
							add
						</Button>
					</ModalFooter>
				</ModalContent>
			</ModalOverlay>
		</Modal >
	)

}

export default CDNModal;
