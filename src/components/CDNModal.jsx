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
import { useState } from 'react';

const CDNModal = ({ isOpen, onClose }) => {
	const [cdnLinks, setCdnLinks] = useState([])
	const [userInput, setUserInput] = useState("")

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
