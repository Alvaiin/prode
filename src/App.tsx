import { useEffect, useState } from 'react';
import './App.css';
import { predicciones as data } from './components/data/predicciones';
import Grupo from './components/Grupo/Grupo';
import useFetchPaises from './hooks/useFetchPaises';
import { Prediccion, Predicciones } from './types/Prediccion';
import { ensure } from './utils/arrayUtils';
import 'animate.css';


function App() {


  const [predicciones, setPredicciones] = useState<Predicciones[]>();

  const { loading, grupos } = useFetchPaises();

  // const [predicciones, setPredicciones] = useState(grupos);

  const callBack = (id: string, pred: Prediccion[]) => {
    // console.log(id);
    const p = ensure(predicciones?.find((p) => p.grupo === id))
    // console.log(p);
    // console.log(predicciones.indexOf(p));
    predicciones?.splice(predicciones.indexOf(p), 1, { grupo: id, posiciones: pred })
    // console.log(predicciones)

  }

  useEffect(() => {
    const predictionsFromUrl = new URLSearchParams(location.search).get("predictions");
    if (predictionsFromUrl){
      setPredicciones(JSON.parse(predictionsFromUrl));
      // console.log("predictionsFromUrl: ", predictionsFromUrl);
    }
    else {
      // console.log("Data: ",data);
      setPredicciones(data)
    }
  }, [])

  const onPressCompartirPredicciones = () => {
    let predictions = JSON.stringify(predicciones);
    // console.log("predicciones: ", predictions);
    // console.log("Encoded predictions: ", encodeURIComponent(predictions));
    navigator.clipboard.writeText("http://localhost:3000/?predictions="+encodeURIComponent(predictions))
  }

  return (
    <>
      <h1 style={{ "fontSize": "4em", "color": "white", "textAlign": "center" }}>Elige tus predicciones</h1>
      {loading && <div className='center-container'><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}
      <div className="App" >
        {grupos?.map((grupo, index) =>
          // <Grupo key={index} id={grupo.nombre} paises={grupo.paises} predicciones={callBack} />
          <div key={index} className='animate__animated animate__fadeIn'>
            <Grupo id={grupo.nombre} paises={grupo.paises} predicciones={ensure(predicciones?.find((p) => p.grupo === grupo.nombre))} callBack={callBack} />
          </div>
        )}
      </div>
      <div className='center-container'>
        <button className='myButton' onClick={onPressCompartirPredicciones}>Compartir mis predicciones</button>
      </div>
    </>
  );
}

export default App;
