import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableRow = ({ id, assunto, date, status }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            <tr onClick={handleShow}>
                <td>{id}</td>
                <td>{assunto}</td>
                <td>{date}</td>
                <td>{status}</td>
            </tr>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={false}
                dialogClassName='modal-lg'
                centered
            >
                <Modal.Body>
                    <h4>{assunto} #{id}</h4>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TableRow;