import React, { useEffect, useState } from 'react'
import { paises as data } from '../components/data/paises'
import { Pais } from '../types/Pais'


const useFetchPaises = () => {

    const [state, setState] = useState<{ paises?: Pais[], loading: Boolean }>({ paises: undefined, loading: true });

    useEffect(() => {
        setState({ paises: undefined, loading: true });

        setTimeout(() => {
            console.log("fin fetch")
            setState({ paises: data, loading: false })
            console.log(data)
        }, 1500)

    }, [])


    return state;
}

export default useFetchPaises