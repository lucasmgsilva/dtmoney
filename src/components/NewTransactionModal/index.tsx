import Modal, { Props } from "react-modal";
import {Container} from "./styles"
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container>
          <h2>Cadastrar Transação</h2>

          <input  placeholder="Título"/>
          <input type="number" placeholder="Valor"/>
          <input placeholder="Categoria"/>

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}