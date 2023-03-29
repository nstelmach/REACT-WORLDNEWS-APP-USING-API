import { Modal } from "react-bootstrap";

type PopUpProps = {
  hideModal: () => void;
  isOpen: boolean;
  title?: string;
  body?: string;
  content?: string;
  author?: string;
  url?: string;
};

function PopUp({
  hideModal,
  isOpen,
  title,
  body,
  content,
  author,
  url,
}: PopUpProps) {
  return (
    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      {title ? (
        <Modal.Body>{body}</Modal.Body>
      ) : (
        <Modal.Body>
          {content === undefined ? "No content found" : content}
          <p className="mb-0 mt-3 opacity-75">
            Author: {author === undefined ? "No author found" : author}
          </p>
          <div className="mb-0 mt-2 opacity-75">
            Source:
            <a href={url} className="ms-1 text-break">
              {url === undefined ? "No source found" : url}
            </a>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <button type="button" className="btn btn-primary" onClick={hideModal}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
