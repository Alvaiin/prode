import './App.css';
import Grupo from './components/Grupo/Grupo';
import useFetchPaises from './hooks/useFetchPaises';
import { Pais } from './types/Pais';


function App() {

  const {loading, paises} = useFetchPaises();
  return (
    <div className="App">
      
      {loading && <p>Loading...</p>}

      {paises && <Grupo id="C" paises={paises}/>}
      {paises && <Grupo id="F" paises={paises}/>}
        
        {/* <CardPais pais="Argentina" posicion={1} logo={"https://logodownload.org/wp-content/uploads/2016/11/afa-seleccion-argentina-futbol-logo.png"} colors={["#74acdf", "#ffffff", "#74acdf"]} />
        <CardPais pais="Mexico" posicion={2} logo={"https://logodownload.org/wp-content/uploads/2021/10/fmf-seleccion-de-mexico-logo.png"} colors={["#006847", "#FFFFFF", "#CE1126"]} />
        <CardPais pais="Polonia" posicion={3} logo={"https://www.nicepng.com/png/full/927-9274115_poland-national-football-team-logo.png"} colors={["#FFFFFF", "#D22730"]} />
        <CardPais pais="Arabia Saudita" posicion={4} logo={"https://logodownload.org/wp-content/uploads/2019/12/al-hilal-fc-logo-1.png"} colors={["#006C32", "#FFFFFF"]} /> */}
    </div>
  );
}

export default App;
