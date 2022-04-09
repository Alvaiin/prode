import React, { useEffect } from 'react'
import { Pais } from '../../types/Pais';
import './styles.css';

interface IProps{
    pais: Pais,
    posicion: number
}

const CardPais = (props: IProps) => {

    const { nombre, logo, colors } = props.pais;

    const background = {
        "background": `linear-gradient(90deg,${colors.map((color) => `${color}`)})`
    }


    return (
        <div className='card'>
            <div className='posicion'>
                {props.posicion}
            </div>
            <div className='pais' style={background}>
                <div className='logo' >
                    <img src={logo} alt='afa-logo' style={{ "maxHeight": "50px", "maxWidth": "50px" }} />
                </div>
                <div className='nombre'>{nombre.toUpperCase()}</div>
            </div>
        </div>
    )
}

export default CardPais