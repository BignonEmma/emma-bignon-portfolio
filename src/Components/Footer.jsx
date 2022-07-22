import React from "react";
import Modal from "react-modal";
import { FiLinkedin, FiGithub, FiInfo } from "react-icons/fi";
import "../Style/Footer.css";
import { IoIosClose } from "react-icons/io";

Modal.setAppElement("#root");
export default function Navbar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="footer-container">
      <div className="logo-footer">
        <a href="https://www.linkedin.com/in/emma-bgn/">
          <FiLinkedin size="1.5em" />
        </a>
      </div>
      <div className="logo-footer">
        <a href="https://github.com/BignonEmma">
          <FiGithub size="1.5em" />
        </a>
      </div>
      <div className="logo-footer">
        <FiInfo size="1.5em" onClick={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal-container"
        >
          <div>
            <div className="logo-close">
              <IoIosClose
                size="2em"
                onClick={closeModal}
                className="close-button"
              ></IoIosClose>
            </div>
            <div className="block-credits">
              <p className="copyrights">©Bignon Emma – tous droits réservés.</p>
              <p className="credits">
                Ce portfolio est le site édité et codé par Bignon Emma. Il a
                pour vocation de présenter son profil et ses réalisations.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
