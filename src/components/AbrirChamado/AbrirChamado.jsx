import '../FAB/FAB.css'
import headset from '../../assets/headset.png'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { format } from 'date-fns';

const AbrirChamado = ({ addCalling, nextId }) => {
    const [show, setShow] = useState(false);

    const [categoria, setCategoria] = useState('');
    const [assunto, setAssunto] = useState('');
    const [texto, setTexto] = useState('');
    const [imagem, setImagem] = useState(null);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setCategoria('')
        setAssunto('')
        setTexto('')
        setImagem(null)
        setShow(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCalling = {
            id: nextId,
            categoria: categoria,
            assunto: assunto,
            texto: texto,
            imagem: imagem,
            date: format(new Date(), 'dd/MM/yyyy HH:mm'),
            status: 'Aberto'
        }

        
        addCalling(newCalling);
        handleClose();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagem(URL.createObjectURL(file));
        }
    }

    return(
        <div>
            <div className='FAB'>
                <img src={headset} onClick={handleShow}></img>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={false}
                dialogClassName='modal-lg'
                centered
            >
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='categoria' className='col-form-label'>Categoria:</label>
                            <select id='categoria' className='form-control' value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                                <option value=''>Selecione uma opção</option>
                                <option value='Suporte técnico' >Suporte técnico</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='assunto' className='col-form-label'>Assunto:*</label>
                            <input type='text' id='assunto' className='form-control' value={assunto} onChange={(e) => setAssunto(e.target.value)} required></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='texto' className='col-form-label'>Descrição:*</label>
                            <textarea className='form-control' id='texto' value={texto} onChange={(e) => setTexto(e.target.value)} required></textarea>
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label htmlFor='campo-imagem' className='col-form-label'>Anexo:</label>
                            <input type='file' id='campo-imagem' className='form-control' onChange={handleImageChange}></input>
                        </div>
                        <div className='modal-footer'>
                            <button type='submit' className='btn btn-primary'>Enviar</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AbrirChamado;