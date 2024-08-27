import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Post.css";
import upvote from "../../assets/upvote.png";
import downvote from "../../assets/downvote.png";
import repost from "../../assets/repost.png";
import commentary from "../../assets/commentary.png";
import { format, isToday, isYesterday, parse } from 'date-fns';


const Post = ({ titulo, pfp, categoria, descricao, img, date }) => {
    const [show, setShow] = useState(false);
    const [votes, setVotes] = useState(0);
    const [voted, setVoted] = useState(null);

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
                    <Modal.Title>{titulo}</Modal.Title>
                    <span className='votes-modal' style={{color: votes > 0 ? 'green' : votes < 0 ? 'red' : 'black'}}>
                        {votes}
                    </span>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <img src={img} />
                        </div>
                        {descricao}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Post;
