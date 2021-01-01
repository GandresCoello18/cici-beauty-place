import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface Props {
  title: string
  visible: boolean
  children: ReactNode
  setVisible: Dispatch<SetStateAction<boolean>>
}

const ModalElement = ({ title, visible, children, setVisible }: Props) => {
  return (
    <Modal
      isOpen={visible}
      toggle={() => setVisible(!visible)}
      className="font-arvo"
    >
      <ModalHeader toggle={() => setVisible(!visible)}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => setVisible(!visible)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalElement
