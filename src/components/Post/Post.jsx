import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Post.css";
import upvote from "../../assets/upvote.png";
import downvote from "../../assets/downvote.png";
import repost from "../../assets/repost.png";
import commentary from "../../assets/commentary.png";
import holder3 from "../../assets/holder3.jpg";
import holder4 from "../../assets/holder4.png";

const Post = ({ titulo, pfp, categoria, descricao, img }) => {
    const [show, setShow] = useState(false);
    const [votes, setVotes] = useState(0);
    const [voted, setVoted] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    Hoje, 18:30
                </div>
            </div>
            <div className="postButtons">
                <button onClick={handleUpVote}>
                    <img src={upvote} alt="Upvote" />
                </button>
                <span 
                    id='votes'
                    style={{color: votes > 0 ? 'green' : votes < 0 ? 'red' : 'black'}}
                >
                    {votes}
                </span>
                <button onClick={handleDownVote}>
                    <img src={downvote} alt="Downvote" />
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
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={img} />
                    </div>
                    {descricao}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Post;
