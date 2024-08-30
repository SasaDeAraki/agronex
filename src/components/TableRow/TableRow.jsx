import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableRow.css';
import send from '../../assets/send.png'
import Comentario from "../Comentario/Comentario";
import { Tabs, Tab } from "react-bootstrap";
import { isToday, isYesterday, format, parse } from "date-fns";


const TableRow = ({ id, categoria, assunto, texto, imagem, date, status, updateCallingStatus, callingsData }) => {
    const [show, setShow] = useState(false);
    const [comments, setComments] = useState([]);
    const [newCommentary, setNewCommentary] = useState('');
    const [horario, setHorario] = useState('');

    const handleNewComment = () => {
        if (newCommentary.trim() !== '') {
            setComments([...comments, newCommentary]);
            setNewCommentary('');

            if (status != 'Fechado') {
                updateCallingStatus(id, 'Pendente');
            }
        }
    }

    const handleCloseCalling = () => {
        if (status !== 'Fechado') {
            updateCallingStatus(id, 'Fechado');
            const novoHorario = format(new Date(), 'HH:mm dd/MM/yyyy');
            const horarioParse = parse(novoHorario, 'HH:mm dd/MM/yyyy', new Date());
    
            const isTodayDate = isToday(horarioParse);
            const isYesterdayDate = isYesterday(horarioParse);
    
            const formattedDate = isTodayDate
                ? 'Hoje ' + format(horarioParse, 'HH:mm')
                : isYesterdayDate
                ? 'Ontem' + format(horarioParse, 'HH:mm')
                : format(horarioParse, 'dd/MM/yyyy HH:mm')
    
            setHorario(formattedDate);
    
            setIsClosed(true);
        }
        handleClose();
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const relatedData = callingsData.filter(calling => calling.categoria === categoria && calling.id != id);

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
                            <h5 style={{color: 'grey'}}>{categoria}</h5>
                        </div>
                        <div className="right-content">
                            <h5 style={{ color: status === 'Aberto' ? 'red' : status === 'Fechado' ? 'green' : 'black' }}>{status}</h5>
                            <h6 style={{ color: 'grey' }}>{horario}</h6>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey='descricao' id="uncontrolled-tab">
                        <Tab eventKey='descricao' title='Descrição'>
                            <div className="descricao-content">
                                <div>
                                    {texto}
                                    {imagem && (
                                        <div className="imagem">
                                            <h5>Anexos:</h5>
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
                            </div>
                        </Tab>
                        <Tab eventKey='relacionados' title='Relacionados'>
                            <div className="descricao-content">
                                {relatedData.length > 0 ? (
                                    <table>
                                        <tbody>
                                            {relatedData.map((data, index) => (
                                                <tr key={index} onClick={() => handleRelatedShow(data)}>
                                                    <ti>{data.id}</ti>
                                                    <ti>{data.assunto}</ti>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="sem-chamados">
                                        <p>Não há outros chamados relacionados.</p>
                                    </div>
                                )}
                            </div>
                        </Tab>
                    </Tabs>    
                </Modal.Body>
                <Modal.Footer>
                    {status !== 'Fechado'  && 
                        <button type="button" className="btn btn-danger" onClick={handleCloseCalling}>Fechar Chamado</button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TableRow;