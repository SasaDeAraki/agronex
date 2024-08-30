import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableRow.css';
import send from '../../assets/send.png';
import Comentario from "../Comentario/Comentario";
import { Tabs, Tab } from "react-bootstrap";
import { isToday, isYesterday, format, parse } from "date-fns";
import '../CallingsTable/CallingsTable.css';
import redirect from '../../assets/redirect.png';

const TableRow = ({ id, categoria, assunto, texto, imagem, date, status, updateCallingStatus, callingsData }) => {
    const [show, setShow] = useState(false);
    const [comments, setComments] = useState([]);
    const [newCommentary, setNewCommentary] = useState('');
    const [horario, setHorario] = useState('');
    const [supportFiles] = useState([
        {
            categoria: 'Erros técnicos',
            endereco: 'https://drive.google.com/drive/folders/1lxhb52MjdKhB_ojzeCGjoWykeTihHlqQ?usp=sharing'
        },
        {
            categoria: 'Alterações de conta',
            endereco: 'https://drive.google.com/drive/folders/1da76UVwndQdMYx7thw3tvqV502jylYe-?usp=sharing'
        },
        {
            categoria: 'Compatibilidade e navegação',
            endereco: 'https://drive.google.com/drive/folders/18uTq7e3kQXRzymjxp3Q6Om7nGl9JQ1bW?usp=sharing'
        }
    ]);

    const handleNewComment = () => {
        if (newCommentary.trim() !== '') {
            setComments([...comments, newCommentary]);
            setNewCommentary('');

            if (status !== 'Fechado') {
                updateCallingStatus(id, 'Pendente');
            }
        }
    };

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
                : format(horarioParse, 'dd/MM/yyyy HH:mm');
    
            setHorario(formattedDate);
        }
        handleClose();
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const relatedData = callingsData.filter(calling => calling.categoria === categoria && calling.id !== id);
    const relatedFiles = supportFiles.find(file => file.categoria === categoria) || {};

    return(
        <>
            <tr onClick={handleShow}>
                <td>{id}</td>
                <td>{assunto}</td>
                <td>{categoria}</td>
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
                                            <img src={send} alt="Enviar"></img>
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
                                <div className="tabela-conteudos-relacionados">
                                    {relatedData.length > 0 ? (
                                        <table className="tabela-chamados">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Assunto</th>
                                                    <th>Categoria</th>
                                                    <th>Status</th>
                                                    <th>Arquivos de suporte</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {relatedData.map((data, index) => (
                                                    <tr key={index} style={{cursor: 'default'}}>
                                                        <td>{data.id}</td>
                                                        <td>{data.assunto}</td>
                                                        <td>{data.categoria}</td>
                                                        <td style={{ color: data.status === 'Aberto' ? 'red' : data.status === 'Fechado' ? 'green' : 'black' }}>{data.status}</td>
                                                        <td>
                                                            {relatedFiles ? (
                                                                <a href={relatedFiles.endereco} target="_blank" rel="noopener noreferrer">
                                                                    <img src={redirect} alt="Link para arquivo de suporte" className="redirect"/>
                                                                </a>
                                                            ) : 'N/A'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="sem-chamados">
                                            <a href={relatedFiles.endereco} target="_blank" rel="noopener noreferrer">
                                                Arquivos relacionados
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>    
                </Modal.Body>
                {status !== 'Fechado'  && 
                    <Modal.Footer>
                        <button type="button" className="btn btn-danger" onClick={handleCloseCalling}>Fechar Chamado</button>
                    </Modal.Footer>
                }
            </Modal>
        </>
    );
};

export default TableRow;
