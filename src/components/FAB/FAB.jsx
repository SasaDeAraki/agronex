import './FAB.css'
import pen from '../../assets/pen.png'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import holder2 from '../../assets/holder2.jpg'
import { format } from 'date-fns';

const FAB = ({ addPost }) => {
    const [show, setShow] = useState(false);

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState(null);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setTitulo('')
        setCategoria('')
        setDescricao('')
        setImg(null)
        setShow(false)
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            titulo: titulo,
            pfp: holder2,
            categoria: categoria,
            descricao: descricao,
            img: img,
            date: format(new Date(), 'HH:mm dd/MM/yyyy')
        }

        addPost(newPost);
        handleClose();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImg(URL.createObjectURL(file));
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='campo-titulo' className='col-form-label'>Título</label>
                            <input type='text' id='campo-titulo' className='form-control' value={titulo} onChange={(e) => setTitulo(e.target.value)} required></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='campo-categoria' className='col-form-label'>Categoria</label>
                            <input type='text' id='campo-categoria' className='form-control' value={categoria} onChange={(e) => setCategoria(e.target.value)} maxLength='30' required></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='campo-texto' className='col-form-label'>O que está acontecendo?</label>
                            <textarea className='form-control' id='campo-texto' value={descricao} onChange={(e) => setDescricao(e.target.value)} maxLength='480' required />
                        </div>
                        <br />
                        <div className='form-group'>
                            <input type='file' id='campo-imagem' className='form-control' onChange={handleImageChange}></input>
                        </div>
                        <div className='modal-footer'>
                            <button type='submit' className='btn btn-primary'>Enviar</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default FAB