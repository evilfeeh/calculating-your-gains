import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react'

export default function AlertResults({ results, isVisible, onClose }: any ) {
  return (
    <Modal isOpen={isVisible} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Results</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        To <b>lose</b> weight: <br/> Consume <Text as='mark'>{results.lose}</Text> calories per day <br/>
        To <b>keep</b> weight: <br/> Consume <Text as='mark'>{results.keep}</Text> calories per day <br/>
        To <b>gain</b> weight: <br/> Consume <Text as='mark'>{results.gain}</Text> calories per day <br/>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
