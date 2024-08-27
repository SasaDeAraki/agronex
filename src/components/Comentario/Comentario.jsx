import './Comentario.css'
import { format, isToday } from 'date-fns';

const Comentario = ({ comentario }) => {
    return(
        <>
            <div className="container-comentario">
                <div className='comentario-header'>
                    <h5>Admin</h5>
                    <h6>{format(new Date(), 'dd/MM/yyyy HH:mm')}</h6>
                </div>
                <div>
                    <p>{comentario}</p>
                </div>
            </div>
        </>
    )
}

export default Comentario;