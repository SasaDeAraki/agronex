import './FAB.css'
import pen from '../../assets/pen.png'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAB = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <div>
            <div className='FAB'>
                <img src={ pen } onClick={handleShow}></img>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={false}
                dialogClassName='modal'
                centered
            >
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label for='campo-titulo' className='col-form-label'>Título</label>
                            <input type='text' id='campo-titulo' className='form-control'></input>
                        </div>
                        <div className='form-group'>
                            <label for='campo-texto' className='col-form-label'>O que está acontecendo?</label>
                            <textarea className='form-control' id='campo-texto' maxLength='480' />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='modal-footer'>
                        <button type='submit' className='btn btn-primary'>Enviar</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FAB