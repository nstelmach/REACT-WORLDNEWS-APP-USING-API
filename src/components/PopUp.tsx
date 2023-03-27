import { Modal } from "react-bootstrap";

type PopUpProps = {
  hideModal: () => void;
  isOpen: boolean;
  title: string;
  body: string;
};

function PopUp({ hideModal, isOpen, title, body }: PopUpProps) {
  return (
    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-primary" onClick={hideModal}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
