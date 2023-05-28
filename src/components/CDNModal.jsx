import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'

const CDNModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay>
				<ModalContent>
					<ModalHeader>Add CDN</ModalHeader>
					<ModalBody>
						BODY
					</ModalBody>
					<ModalFooter>
						FOOTER
					</ModalFooter>
				</ModalContent>
			</ModalOverlay>

		</Modal>
	)

}

export default CDNModal;
