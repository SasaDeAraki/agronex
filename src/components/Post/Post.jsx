import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Post.css";
import upvote from "../../assets/upvote.png";
import downvote from "../../assets/downvote.png";
import repost from "../../assets/repost.png";
import commentary from "../../assets/commentary.png";
import { format, isToday, isYesterday, parse } from 'date-fns';
import Comentario from '../Comentario/Comentario';
import send from '../../assets/send.png'



const Post = ({ titulo, pfp, categoria, descricao, img, date }) => {
    const [show, setShow] = useState(false);
    const [votes, setVotes] = useState(0);
    const [voted, setVoted] = useState(null);
    const [comments, setComments] = useState([]);
    const [newCommentary, setNewCommentary] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const parsedDate = parse(date, 'HH:mm dd/MM/yyyy', new Date());

    const isTodayDate = isToday(parsedDate);
    const isYesterdayDate = isYesterday(parsedDate);

    const formattedDate = isTodayDate
        ? format(parsedDate, 'HH:mm') + ' Hoje'
        : isYesterdayDate
        ? format(parsedDate, 'HH:mm') + ' Ontem'
        : format(parsedDate, 'HH:mm dd/MM/yyyy')

    const handleUpVote = () => {
        if (voted !== 'up') {
            setVotes(prevVotes => voted === 'down' ? prevVotes + 2 : prevVotes + 1);
            setVoted('up');
        } else {
            setVotes(prevVotes => prevVotes - 1);
            setVoted(null);
        }
    }

    const handleDownVote = () => {
       if (voted !== 'down') {
        setVotes(prevVotes => voted === 'up' ? prevVotes - 2 : prevVotes - 1);
        setVoted('down');
       } else {
        setVotes(prevVotes => prevVotes + 1);
        setVoted(null);
       }
    }

    const handleNewComment = () => {
        if (newCommentary.trim() !== '') {
            setComments([...comments, newCommentary]);
            setNewCommentary('');
        }
    }

    return (
        <div className="containerPost">
            <div>
                <img src={pfp} className="PFP"></img>
            </div>
            <div className="postContent">
                <div className="titleCategory" onClick={handleShow}>
                    <h1 className="titlePost">
                        {titulo}
                    </h1>
                    <h3 className="categoria">{"->"} {categoria}</h3>
                </div>
                <div className='postImgFlex' onClick={handleShow}>
                    {img && (
                        <div className="postImgContent">
                            <div className="postImgImages">
                                <img src={img} alt="Post image"/>
                            </div>
                        </div>
                    )}
                    <div className={`postText ${img ? 'postImgText' : ''}`}>
                        {descricao}
                    </div>
                </div>
                <div className="postBottom">
                    {formattedDate}
                </div>
            </div>
            <div className="postButtons">
                <button onClick={handleUpVote}>
                    <img src={upvote} alt="Upvote" style={{filter: voted === 'up' ? 'invert(45%) sepia(84%) saturate(353%) hue-rotate(63deg) brightness(97%) contrast(92%)' : 'none'}} />
                </button>
                <span 
                    id='votes'
                    style={{color: votes > 0 ? 'green' : votes < 0 ? 'red' : 'black'}}
                >
                    {votes}
                </span>
                <button onClick={handleDownVote}>
                    <img src={downvote} alt="Downvote" style={{filter: voted === 'down' ? 'invert(15%) sepia(90%) saturate(7500%) hue-rotate(353deg) brightness(92%) contrast(95%)' : 'none'}} />
                </button>
                <button><img src={repost} alt="Repost"/></button>
                <button><img src={commentary} alt="Commentary"/></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={false}
                dialogClassName='modal-lg'
                centered
            >
                <Modal.Header>
                    <img src={pfp} className='PFP' style={{scale: '1.3'}}></img>
                    <div className='header-post'>
                        <Modal.Title>{titulo}</Modal.Title>
                        <h3 className="categoria" style={{margin: '0', padding: '0', fontSize: '16px' }}>{categoria}</h3>
                    </div>
                    <div className='postButtons' style={{transform: 'scale(1.2)'}}>
                        <button onClick={handleUpVote}>
                            <img src={upvote} alt="Upvote" style={{filter: voted === 'up' ? 'invert(45%) sepia(84%) saturate(353%) hue-rotate(63deg) brightness(97%) contrast(92%)' : 'none'}} />
                        </button>
                        <span style={{color: votes > 0 ? 'green' : votes < 0 ? 'red' : 'black'}}>
                            {votes}
                        </span>
                        <button onClick={handleDownVote}>
                            <img src={downvote} alt="Downvote" style={{filter: voted === 'down' ? 'invert(15%) sepia(90%) saturate(7500%) hue-rotate(353deg) brightness(92%) contrast(95%)' : 'none'}} />
                        </button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='post-image'>
                            <img src={img} />
                        </div>
                        <p className='post-descricao'>{descricao}</p>
                        <div className="postBottom" style={{width: '100%', display: 'flex'}}>
                            <span style={{marginLeft: 'auto'}}>{formattedDate}</span>
                        </div>
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
        </div>
    );
}

export default Post;
