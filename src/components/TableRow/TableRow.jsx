import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableRow.css';
import send from '../../assets/send.png'
import Comentario from "../Comentario/Comentario";

const TableRow = ({ id, categoria, assunto, texto, imagem, date, status }) => {
    const [show, setShow] = useState(false);
    const [comments, setComments] = useState([]);
    const [newCommentary, setNewCommentary] = useState('');

    const handleNewComment = () => {
        if (newCommentary.trim() !== '') {
            setComments([...comments, newCommentary]);
            setNewCommentary('');
        }
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            <tr onClick={handleShow}>
                <td>{id}</td>
                <td>{assunto}</td>
                <td>{date}</td>
                <td style={{ color: status === 'Aberto' ? 'red' : status === 'Fechado' ? 'green' : 'black' }}>{status}</td>
            </tr>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={false}
                dialogClassName='modal-lg'
                centered
            >
                <Modal.Header>
                    <div className="h-header">
                        <div className="left-content">
                            <h4>{assunto} #{id}</h4>
                            <h5>{categoria}</h5>
                        </div>
                        <div className="right-content">
                            <h5 style={{ color: status === 'Aberto' ? 'red' : status === 'Fechado' ? 'green' : 'black' }}>{status}</h5>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {texto}
                        {imagem && (
                            <div className="imagem">
                                <a href={imagem} target="_blank" rel="noopener noreferrer">
                                    <img src={imagem} alt={`Imagem de ${assunto}`} style={{ maxWidth: '30%', cursor: 'pointer' }}></img>
                                </a>
                            </div>
                        )}
                    </div>
                    <div>
                        <hr />
                        <div className="form-group" style={{ width: '100%' }} id="comentario">
                            <textarea className="form-control" placeholder="Digite sua resposta..." value={newCommentary} onChange={(e) => setNewCommentary(e.target.value)}></textarea>
                            <button id="enviar" type="submit" onClick={handleNewComment}>
                                <img src={send}></img>
                            </button>
                        </div>
                        <div>
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <Comentario key={index} comentario={comment} />
                                ))
                            ) : (
                                <p>Sem comentários ainda.</p>
                            )}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TableRow;