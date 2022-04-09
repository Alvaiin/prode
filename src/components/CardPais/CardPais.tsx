import React, { useEffect } from 'react'
import { Pais } from '../../types/Pais';
import './styles.css';

interface IProps{
    pais: Pais,
    posicion: number
}

const CardPais = (props: IProps) => {

    const { nombre, logo } = props.pais;


    return (
        <div className='card'>
            <div className='posicion'>
                {props.posicion}
            </div>
            <div className='pais'>
                <div className='logo' >
                    <img src={logo} alt='afa-logo' style={{ "maxHeight": "50px", "maxWidth": "50px" }} />
                </div>
                <div className='nombre'>{nombre.toUpperCase()}</div>
            </div>
        </div>
    )
}

export default CardPais