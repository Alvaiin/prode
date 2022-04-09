import React, { useEffect, useState } from 'react'
import { grupos as data } from '../components/data/paises'
import { Grupo } from '../types/Grupo';
import { Pais } from '../types/Pais'


const useFetchPaises = () => {

    const [state, setState] = useState<{ grupos?: Grupo[], loading: Boolean }>({ grupos: undefined, loading: true });

    useEffect(() => {
        setState({ grupos: undefined, loading: true });

        setTimeout(() => {
            setState({ grupos: data, loading: false })
        }, 500)

    }, [])


    return state;
}

export default useFetchPaises